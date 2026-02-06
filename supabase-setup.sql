-- ==============================================
-- SUPABASE SETUP FOR PYTHON LEARNING APP
-- Run this in Supabase SQL Editor
-- ==============================================

-- User Profiles Table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  streak_days INTEGER DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Progress Table (lessons completed)
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Challenge Progress Table
CREATE TABLE IF NOT EXISTS public.challenge_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  challenge_id TEXT NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  attempts INTEGER DEFAULT 1,
  best_time_ms INTEGER,
  UNIQUE(user_id, challenge_id)
);

-- Badges Table
CREATE TABLE IF NOT EXISTS public.badges (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  xp_reward INTEGER DEFAULT 0
);

-- User Badges (earned)
CREATE TABLE IF NOT EXISTS public.user_badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  badge_id TEXT REFERENCES public.badges(id) NOT NULL,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;

-- Policies: Users can only access their own data
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own lessons" ON public.lesson_progress
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own challenges" ON public.challenge_progress
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own badges" ON public.user_badges
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Anyone can view badges" ON public.badges
  FOR SELECT TO authenticated USING (true);

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert default badges
INSERT INTO public.badges (id, name, description, icon, xp_reward) VALUES
  ('first-lesson', 'First Steps', 'Complete your first lesson', '🎯', 50),
  ('five-lessons', 'Getting Started', 'Complete 5 lessons', '📚', 100),
  ('ten-lessons', 'Dedicated Learner', 'Complete 10 lessons', '🌟', 200),
  ('all-lessons', 'Course Master', 'Complete all lessons', '👑', 500),
  ('first-challenge', 'Challenger', 'Complete your first challenge', '⚔️', 75),
  ('five-challenges', 'Problem Solver', 'Complete 5 challenges', '🧩', 150),
  ('ten-challenges', 'Code Warrior', 'Complete 10 challenges', '🏆', 300),
  ('streak-3', 'On Fire', '3-day learning streak', '🔥', 100),
  ('streak-7', 'Week Warrior', '7-day learning streak', '💪', 250),
  ('streak-30', 'Monthly Master', '30-day learning streak', '🚀', 1000),
  ('speed-demon', 'Speed Demon', 'Complete a challenge in under 60 seconds', '⚡', 150),
  ('perfectionist', 'Perfectionist', 'Complete a challenge on first attempt', '💎', 100)
ON CONFLICT (id) DO NOTHING;

-- Function to update XP and check level up
CREATE OR REPLACE FUNCTION public.add_xp(user_uuid UUID, xp_amount INTEGER)
RETURNS INTEGER AS $$
DECLARE
  new_xp INTEGER;
  new_level INTEGER;
BEGIN
  UPDATE public.profiles 
  SET xp = xp + xp_amount,
      level = GREATEST(1, FLOOR(SQRT((xp + xp_amount) / 100)) + 1),
      last_activity_date = CURRENT_DATE,
      updated_at = NOW()
  WHERE id = user_uuid
  RETURNING xp, level INTO new_xp, new_level;
  
  RETURN new_level;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update streak
CREATE OR REPLACE FUNCTION public.update_streak(user_uuid UUID)
RETURNS INTEGER AS $$
DECLARE
  last_date DATE;
  current_streak INTEGER;
BEGIN
  SELECT last_activity_date, streak_days INTO last_date, current_streak
  FROM public.profiles WHERE id = user_uuid;
  
  IF last_date IS NULL OR last_date < CURRENT_DATE - 1 THEN
    -- Reset streak
    UPDATE public.profiles SET streak_days = 1, last_activity_date = CURRENT_DATE WHERE id = user_uuid;
    RETURN 1;
  ELSIF last_date = CURRENT_DATE - 1 THEN
    -- Continue streak
    UPDATE public.profiles SET streak_days = streak_days + 1, last_activity_date = CURRENT_DATE WHERE id = user_uuid;
    RETURN current_streak + 1;
  ELSE
    -- Same day, no change
    RETURN current_streak;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
