import { useState, useEffect } from 'react'
import { courseData } from './data/courseData'
import { useAuth } from './context/AuthContext'
import { useProgress } from './context/ProgressContext'
import Sidebar from './components/Sidebar'
import LessonContent from './components/LessonContent'
import GamificationBar from './components/GamificationBar'
import './App.css'

function App() {
  const { user, signOut } = useAuth()
  const { progress, completeLesson, isLessonComplete } = useProgress()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [expandedChapters, setExpandedChapters] = useState([1])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Use progress from Supabase
  const completedLessons = progress.completedLessons

  useEffect(() => {
    // Set first lesson as default
    if (!currentLesson && courseData.chapters.length > 0) {
      setCurrentLesson(courseData.chapters[0].lessons[0])
    }
  }, [])

  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    )
  }

  const markComplete = async (lessonId) => {
    if (!isLessonComplete(lessonId)) {
      await completeLesson(lessonId, 50) // 50 XP per lesson
    }
  }

  const navigateToLesson = (direction) => {
    const allLessons = courseData.chapters.flatMap(c => c.lessons)
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson?.id)
    
    if (direction === 'next' && currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1]
      setCurrentLesson(nextLesson)
      // Expand the chapter containing this lesson
      const chapter = courseData.chapters.find(c => c.lessons.some(l => l.id === nextLesson.id))
      if (chapter && !expandedChapters.includes(chapter.id)) {
        setExpandedChapters(prev => [...prev, chapter.id])
      }
    } else if (direction === 'prev' && currentIndex > 0) {
      const prevLesson = allLessons[currentIndex - 1]
      setCurrentLesson(prevLesson)
      const chapter = courseData.chapters.find(c => c.lessons.some(l => l.id === prevLesson.id))
      if (chapter && !expandedChapters.includes(chapter.id)) {
        setExpandedChapters(prev => [...prev, chapter.id])
      }
    }
  }

  const calculateProgress = () => {
    const totalLessons = courseData.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0)
    return Math.round((completedLessons.length / totalLessons) * 100)
  }

  const handleLessonSelect = (lesson) => {
    setCurrentLesson(lesson)
    setSidebarOpen(false) // Close sidebar on mobile after selecting
  }

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <div className="app">
      {/* Gamification Bar */}
      <GamificationBar />

      {/* Mobile menu button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>

      {/* User Menu */}
      <div className="user-menu-container">
        <button 
          className="user-menu-btn"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <div className="user-avatar">
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
        </button>
        {showUserMenu && (
          <div className="user-menu-dropdown">
            <div className="user-menu-email">{user?.email}</div>
            <div className="user-menu-stats">
              <span>⭐ Level {progress.level}</span>
              <span>✨ {progress.xp} XP</span>
            </div>
            <button onClick={handleLogout} className="user-menu-logout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="app-main">
        <Sidebar 
          course={courseData}
          currentLesson={currentLesson}
          completedLessons={completedLessons}
          expandedChapters={expandedChapters}
          onLessonSelect={handleLessonSelect}
          onChapterToggle={toggleChapter}
          progress={calculateProgress()}
          isOpen={sidebarOpen}
        />
        <main className="main-content">
          {currentLesson && (
            <LessonContent 
              lesson={currentLesson}
              isCompleted={completedLessons.includes(currentLesson.id)}
              onMarkComplete={() => markComplete(currentLesson.id)}
              onNavigate={navigateToLesson}
              courseTitle={courseData.title}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
