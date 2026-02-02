import { useState } from 'react'
import CodeEditor from './CodeEditor'
import Quiz from './Quiz'

function LessonContent({ lesson, isCompleted, onMarkComplete, onNavigate, courseTitle }) {
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'text':
        return (
          <div 
            key={index} 
            className="lesson-text"
            dangerouslySetInnerHTML={{ __html: formatText(section.content) }}
          />
        )
      
      case 'heading':
        const HeadingTag = `h${section.level}`
        return <HeadingTag key={index} className="lesson-heading">{section.content}</HeadingTag>
      
      case 'list':
        return (
          <ul key={index} className="lesson-list">
            {section.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
            ))}
          </ul>
        )
      
      case 'code':
        return (
          <CodeEditor 
            key={index}
            code={section.code}
            language={section.language}
            filename={section.filename}
          />
        )
      
      case 'tip':
        return (
          <div key={index} className="tip-box">
            <div className="tip-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              Pro Tip
            </div>
            <p dangerouslySetInnerHTML={{ __html: formatText(section.content) }} />
          </div>
        )
      
      case 'warning':
        return (
          <div key={index} className="warning-box">
            <div className="warning-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                <path d="M12 9v4M12 17h.01"/>
              </svg>
              Important
            </div>
            <p dangerouslySetInnerHTML={{ __html: formatText(section.content) }} />
          </div>
        )
      
      case 'checkpoint':
        return (
          <div key={index} className="checkpoint">
            <div className="checkpoint-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Checkpoint
            </div>
            <p dangerouslySetInnerHTML={{ __html: formatText(section.content) }} />
          </div>
        )
      
      case 'quiz':
        return <Quiz key={index} quiz={section} />
      
      default:
        return null
    }
  }

  const formatText = (text) => {
    if (!text) return ''
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br/>')
  }

  return (
    <div className="lesson-container animate-in">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <a href="#">Home</a>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <a href="#">Courses</a>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <span>{courseTitle}</span>
      </nav>

      {/* Lesson Header */}
      <header className="lesson-header">
        <h1 className="lesson-title">{lesson.title}</h1>
        <p className="lesson-description">{lesson.content.description}</p>
      </header>

      {/* Lesson Content */}
      <article className="lesson-content">
        {lesson.content.sections.map((section, index) => renderSection(section, index))}
      </article>

      {/* Navigation */}
      <footer className="lesson-nav">
        <button 
          className="nav-btn secondary"
          onClick={() => onNavigate('prev')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Previous
        </button>

        <div className="nav-center">
          {!isCompleted ? (
            <button 
              className="nav-btn gradient-btn mark-complete-btn"
              onClick={onMarkComplete}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Mark Complete
            </button>
          ) : (
            <span className="completed-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Completed
            </span>
          )}
        </div>

        <button 
          className="nav-btn gradient-btn"
          onClick={() => onNavigate('next')}
        >
          Next
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </footer>
    </div>
  )
}

export default LessonContent
