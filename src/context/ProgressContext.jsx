import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'

const ProgressContext = createContext({})

export const useProgress = () => useContext(ProgressContext)

// XP thresholds for levels
const getLevel = (xp) => Math.floor(Math.sqrt(xp / 100)) + 1
const getXpForLevel = (level) => Math.pow(level - 1, 2) * 100
const getXpForNextLevel = (level) => Math.pow(level, 2) * 100

// Badge definitions
const BADGE_DEFINITIONS = {
  'first-lesson': { check: (p) => p.completedLessons.length >= 1 },
  'five-lessons': { check: (p) => p.completedLessons.length >= 5 },
  'ten-lessons': { check: (p) => p.completedLessons.length >= 10 },
  'all-lessons': { check: (p, total) => p.completedLessons.length >= total },
  'first-challenge': { check: (p) => p.completedChallenges.length >= 1 },
  'five-challenges': { check: (p) => p.completedChallenges.length >= 5 },
  'ten-challenges': { check: (p) => p.completedChallenges.length >= 10 },
  'streak-3': { check: (p) => p.streakDays >= 3 },
  'streak-7': { check: (p) => p.streakDays >= 7 },
  'streak-30': { check: (p) => p.streakDays >= 30 },
}

const defaultProgress = {
  xp: 0,
  level: 1,
  streakDays: 0,
  completedLessons: [],
  completedChallenges: [],
  earnedBadges: [],
  lastActivityDate: null,
}

export function ProgressProvider({ children }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState(defaultProgress)
  const [loading, setLoading] = useState(true)
  const [badges, setBadges] = useState([])
  const [newBadge, setNewBadge] = useState(null) // For badge popup

  // Fetch badges definitions
  useEffect(() => {
    async function fetchBadges() {
      const { data } = await supabase.from('badges').select('*')
      if (data) setBadges(data)
    }
    fetchBadges()
  }, [])

  // Fetch user progress when user logs in
  useEffect(() => {
    if (!user) {
      setProgress(defaultProgress)
      setLoading(false)
      return
    }

    async function fetchProgress() {
      setLoading(true)
      
      // Fetch profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      // Fetch completed lessons
      const { data: lessons } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id)

      // Fetch completed challenges
      const { data: challenges } = await supabase
        .from('challenge_progress')
        .select('challenge_id')
        .eq('user_id', user.id)

      // Fetch earned badges
      const { data: userBadges } = await supabase
        .from('user_badges')
        .select('badge_id')
        .eq('user_id', user.id)

      setProgress({
        xp: profile?.xp || 0,
        level: profile?.level || 1,
        streakDays: profile?.streak_days || 0,
        completedLessons: lessons?.map(l => l.lesson_id) || [],
        completedChallenges: challenges?.map(c => c.challenge_id) || [],
        earnedBadges: userBadges?.map(b => b.badge_id) || [],
        lastActivityDate: profile?.last_activity_date,
      })
      
      setLoading(false)
    }

    fetchProgress()
  }, [user])

  // Check and award badges
  const checkBadges = useCallback(async (newProgress, totalLessons = 15) => {
    if (!user) return

    for (const [badgeId, { check }] of Object.entries(BADGE_DEFINITIONS)) {
      if (!newProgress.earnedBadges.includes(badgeId) && check(newProgress, totalLessons)) {
        // Award badge
        const { error } = await supabase
          .from('user_badges')
          .insert({ user_id: user.id, badge_id: badgeId })

        if (!error) {
          // Get badge details for popup
          const badge = badges.find(b => b.id === badgeId)
          if (badge) {
            setNewBadge(badge)
            // Add XP for badge
            if (badge.xp_reward) {
              await addXp(badge.xp_reward, false) // false = don't check badges again
            }
          }
          
          setProgress(prev => ({
            ...prev,
            earnedBadges: [...prev.earnedBadges, badgeId]
          }))
        }
      }
    }
  }, [user, badges])

  // Add XP
  const addXp = useCallback(async (amount, shouldCheckBadges = true) => {
    if (!user) return

    const newXp = progress.xp + amount
    const newLevel = getLevel(newXp)

    // Update Supabase
    await supabase
      .from('profiles')
      .update({ 
        xp: newXp, 
        level: newLevel,
        last_activity_date: new Date().toISOString().split('T')[0],
        updated_at: new Date().toISOString()
      })
      .eq('id', user.id)

    const newProgress = { ...progress, xp: newXp, level: newLevel }
    setProgress(newProgress)

    if (shouldCheckBadges) {
      await checkBadges(newProgress)
    }

    return newLevel
  }, [user, progress, checkBadges])

  // Update streak
  const updateStreak = useCallback(async () => {
    if (!user) return

    const today = new Date().toISOString().split('T')[0]
    const lastDate = progress.lastActivityDate

    let newStreak = progress.streakDays

    if (!lastDate) {
      newStreak = 1
    } else {
      const last = new Date(lastDate)
      const now = new Date(today)
      const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24))

      if (diffDays === 1) {
        newStreak = progress.streakDays + 1
      } else if (diffDays > 1) {
        newStreak = 1
      }
      // If same day, keep current streak
    }

    if (newStreak !== progress.streakDays) {
      await supabase
        .from('profiles')
        .update({ 
          streak_days: newStreak,
          last_activity_date: today 
        })
        .eq('id', user.id)

      const newProgress = { ...progress, streakDays: newStreak, lastActivityDate: today }
      setProgress(newProgress)
      await checkBadges(newProgress)
    }

    return newStreak
  }, [user, progress, checkBadges])

  // Complete a lesson
  const completeLesson = useCallback(async (lessonId, xpReward = 50) => {
    if (!user || progress.completedLessons.includes(lessonId)) return

    // Insert into lesson_progress
    const { error } = await supabase
      .from('lesson_progress')
      .insert({ user_id: user.id, lesson_id: lessonId })

    if (error) return

    // Update local state
    const newLessons = [...progress.completedLessons, lessonId]
    const newProgress = { ...progress, completedLessons: newLessons }
    setProgress(newProgress)

    // Add XP
    await addXp(xpReward)
    
    // Update streak
    await updateStreak()

    // Check badges
    await checkBadges(newProgress)
  }, [user, progress, addXp, updateStreak, checkBadges])

  // Complete a challenge
  const completeChallenge = useCallback(async (challengeId, xpReward = 100, timeMs = null, attempts = 1) => {
    if (!user) return

    const alreadyCompleted = progress.completedChallenges.includes(challengeId)

    if (alreadyCompleted) {
      // Update attempts/time if better
      await supabase
        .from('challenge_progress')
        .update({ 
          attempts: attempts,
          ...(timeMs && { best_time_ms: timeMs })
        })
        .eq('user_id', user.id)
        .eq('challenge_id', challengeId)
      return
    }

    // Insert new completion
    const { error } = await supabase
      .from('challenge_progress')
      .insert({ 
        user_id: user.id, 
        challenge_id: challengeId,
        attempts,
        best_time_ms: timeMs
      })

    if (error) return

    // Update local state
    const newChallenges = [...progress.completedChallenges, challengeId]
    const newProgress = { ...progress, completedChallenges: newChallenges }
    setProgress(newProgress)

    // Add XP
    await addXp(xpReward)

    // Update streak
    await updateStreak()

    // Check badges
    await checkBadges(newProgress)

    // Check for speed badge
    if (timeMs && timeMs < 60000) {
      // Speed demon badge - completed in under 60 seconds
      if (!progress.earnedBadges.includes('speed-demon')) {
        await supabase
          .from('user_badges')
          .insert({ user_id: user.id, badge_id: 'speed-demon' })
        
        const badge = badges.find(b => b.id === 'speed-demon')
        if (badge) {
          setNewBadge(badge)
          setProgress(prev => ({
            ...prev,
            earnedBadges: [...prev.earnedBadges, 'speed-demon']
          }))
        }
      }
    }

    // Check for perfectionist badge (first attempt)
    if (attempts === 1 && !progress.earnedBadges.includes('perfectionist')) {
      await supabase
        .from('user_badges')
        .insert({ user_id: user.id, badge_id: 'perfectionist' })
      
      const badge = badges.find(b => b.id === 'perfectionist')
      if (badge) {
        setNewBadge(badge)
        setProgress(prev => ({
          ...prev,
          earnedBadges: [...prev.earnedBadges, 'perfectionist']
        }))
      }
    }
  }, [user, progress, badges, addXp, updateStreak, checkBadges])

  // Check if lesson is complete
  const isLessonComplete = useCallback((lessonId) => {
    return progress.completedLessons.includes(lessonId)
  }, [progress.completedLessons])

  // Check if challenge is complete
  const isChallengeComplete = useCallback((challengeId) => {
    return progress.completedChallenges.includes(challengeId)
  }, [progress.completedChallenges])

  // Dismiss badge popup
  const dismissBadge = useCallback(() => {
    setNewBadge(null)
  }, [])

  const value = {
    progress,
    loading,
    badges,
    newBadge,
    dismissBadge,
    completeLesson,
    completeChallenge,
    isLessonComplete,
    isChallengeComplete,
    addXp,
    updateStreak,
    // Helpers
    getLevel,
    getXpForLevel,
    getXpForNextLevel,
    xpProgress: progress.xp - getXpForLevel(progress.level),
    xpNeeded: getXpForNextLevel(progress.level) - getXpForLevel(progress.level),
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}
