import { useState } from 'react'

function Sidebar({ 
  course, 
  currentLesson, 
  completedLessons, 
  expandedChapters,
  onLessonSelect, 
  onChapterToggle,
  progress,
  isOpen 
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const getChapterProgress = (chapter) => {
    const completed = chapter.lessons.filter(l => completedLessons.includes(l.id)).length
    return { completed, total: chapter.lessons.length }
  }

  const filteredChapters = searchQuery 
    ? course.chapters.map(ch => ({
        ...ch,
        lessons: ch.lessons.filter(l => 
          l.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(ch => ch.lessons.length > 0)
    : course.chapters

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="course-logo">
          <span className="logo-icon">🐍</span>
          <div>
            <h1 className="course-title">{course.title}</h1>
            <p className="course-subtitle">{course.description}</p>
          </div>
        </div>
        
        <div className="progress-section">
          <div className="progress-header">
            <span>Progress</span>
            <span className="progress-percent">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search lessons..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <nav className="chapter-list">
        {filteredChapters.map((chapter) => {
          const isExpanded = expandedChapters.includes(chapter.id)
          const { completed, total } = getChapterProgress(chapter)
          const isChapterComplete = completed === total

          return (
            <div key={chapter.id} className="chapter">
              <div 
                className={`chapter-header ${isExpanded ? 'expanded' : ''}`}
                onClick={() => onChapterToggle(chapter.id)}
              >
                <div className="chapter-info">
                  <span className={`chapter-number ${isChapterComplete ? 'completed' : ''}`}>
                    {isChapterComplete ? '✓' : chapter.id}
                  </span>
                  <div className="chapter-text">
                    <span className="chapter-name">{chapter.title}</span>
                    <span className="chapter-meta">{completed}/{total} lessons</span>
                  </div>
                </div>
                <svg 
                  className={`chevron ${isExpanded ? 'rotated' : ''}`}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>

              {isExpanded && (
                <ul className="lesson-list">
                  {chapter.lessons.map((lesson) => {
                    const isActive = currentLesson?.id === lesson.id
                    const isCompleted = completedLessons.includes(lesson.id)
                    
                    return (
                      <li 
                        key={lesson.id}
                        className={`lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                        onClick={() => onLessonSelect(lesson)}
                      >
                        <span className="lesson-status">
                          {isCompleted ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          ) : (
                            <span className="status-dot"></span>
                          )}
                        </span>
                        <span className="lesson-name">{lesson.title}</span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
