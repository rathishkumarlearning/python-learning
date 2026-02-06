import { useState } from 'react'
import { Link } from 'react-router-dom'
import { challenges } from '../data/challenges'
import { useProgress } from '../context/ProgressContext'
import './challenges.css'

const difficultyColors = {
  easy: 'difficulty-easy',
  medium: 'difficulty-medium',
  hard: 'difficulty-hard',
}

const difficultyStars = {
  easy: 1,
  medium: 2,
  hard: 3,
}

export default function ChallengesPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const { progress, isChallengeComplete } = useProgress()

  const filteredChallenges = challenges.filter(challenge => {
    const matchesFilter = filter === 'all' || challenge.difficulty === filter
    const matchesSearch = challenge.title.toLowerCase().includes(search.toLowerCase()) ||
                          challenge.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const stats = {
    total: challenges.length,
    completed: progress.completedChallenges.length,
    easy: challenges.filter(c => c.difficulty === 'easy').length,
    medium: challenges.filter(c => c.difficulty === 'medium').length,
    hard: challenges.filter(c => c.difficulty === 'hard').length,
  }

  return (
    <div className="challenges-page">
      {/* Background Effects */}
      <div className="challenges-bg-grid"></div>
      <div className="challenges-bg-orb challenges-bg-orb-1"></div>
      <div className="challenges-bg-orb challenges-bg-orb-2"></div>

      <div className="challenges-container">
        {/* Header */}
        <div className="challenges-header">
          <div className="challenges-title-section">
            <span className="challenges-icon">🧪</span>
            <div>
              <h1 className="challenges-title">Python Labs</h1>
              <p className="challenges-subtitle">Test your skills with interactive coding challenges</p>
            </div>
          </div>
          <Link to="/" className="back-to-course">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Course
          </Link>
        </div>

        {/* Stats */}
        <div className="challenges-stats">
          <div className="stat-card">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total Labs</div>
          </div>
          <div className="stat-card stat-completed">
            <div className="stat-value">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card stat-easy">
            <div className="stat-value">{stats.easy}</div>
            <div className="stat-label">Easy</div>
          </div>
          <div className="stat-card stat-medium">
            <div className="stat-value">{stats.medium}</div>
            <div className="stat-label">Medium</div>
          </div>
          <div className="stat-card stat-hard">
            <div className="stat-value">{stats.hard}</div>
            <div className="stat-label">Hard</div>
          </div>
        </div>

        {/* Filters */}
        <div className="challenges-filters">
          <div className="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search labs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            {['all', 'easy', 'medium', 'hard'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`filter-btn ${filter === level ? 'active' : ''} ${level !== 'all' ? `filter-${level}` : ''}`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge List */}
        <div className="challenges-list">
          {filteredChallenges.length === 0 ? (
            <div className="no-challenges">
              <span className="no-challenges-icon">🔍</span>
              <p>No labs found matching your criteria</p>
            </div>
          ) : (
            filteredChallenges.map((challenge) => {
              const isCompleted = isChallengeComplete(challenge.id)
              return (
                <Link
                  key={challenge.id}
                  to={`/lab/${challenge.id}`}
                  className={`challenge-card ${isCompleted ? 'completed' : ''}`}
                >
                  <div className="challenge-card-content">
                    <div className="challenge-info">
                      <div className="challenge-title-row">
                        <h3 className="challenge-name">{challenge.title}</h3>
                        {isCompleted && (
                          <span className="completed-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            Completed
                          </span>
                        )}
                      </div>
                      <p className="challenge-description">{challenge.description}</p>
                      <div className="challenge-meta">
                        <span className={`difficulty-badge ${difficultyColors[challenge.difficulty]}`}>
                          {'⭐'.repeat(difficultyStars[challenge.difficulty])} {challenge.difficulty}
                        </span>
                        {challenge.tags?.map(tag => (
                          <span key={tag} className="challenge-tag">#{tag}</span>
                        ))}
                        {challenge.timeEstimate && (
                          <span className="challenge-time">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12 6 12 12 16 14"/>
                            </svg>
                            {challenge.timeEstimate}
                          </span>
                        )}
                        <span className="challenge-xp">+{challenge.xpReward} XP</span>
                      </div>
                    </div>
                    <div className="challenge-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
