import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import './GamificationBar.css'

export default function GamificationBar() {
  const { 
    progress, 
    xpProgress, 
    xpNeeded, 
    badges,
    newBadge,
    dismissBadge 
  } = useProgress()
  const [showBadges, setShowBadges] = useState(false)

  const xpPercent = Math.min(100, (xpProgress / xpNeeded) * 100)
  const earnedBadges = badges.filter(b => progress.earnedBadges.includes(b.id))

  return (
    <>
      <div className="gamification-bar">
        {/* Level & XP */}
        <div className="gam-level-section">
          <div className="gam-level-badge">
            <span className="gam-level-number">{progress.level}</span>
          </div>
          <div className="gam-xp-info">
            <div className="gam-xp-text">
              <span className="gam-xp-current">{progress.xp} XP</span>
              <span className="gam-xp-next">Level {progress.level + 1}: {xpNeeded - xpProgress} XP to go</span>
            </div>
            <div className="gam-xp-bar">
              <div className="gam-xp-fill" style={{ width: `${xpPercent}%` }} />
            </div>
          </div>
        </div>

        {/* Streak */}
        {progress.streakDays > 0 && (
          <div className="gam-streak">
            <span className="gam-streak-icon">🔥</span>
            <span className="gam-streak-count">{progress.streakDays}</span>
            <span className="gam-streak-label">day streak</span>
          </div>
        )}

        {/* Badges Button */}
        <button 
          className="gam-badges-btn"
          onClick={() => setShowBadges(true)}
        >
          <span>🏆</span>
          <span className="gam-badges-count">{earnedBadges.length}</span>
        </button>

        {/* Labs Link */}
        <Link to="/labs" className="gam-labs-btn">
          <span>🧪</span>
          <span>Labs</span>
        </Link>
      </div>

      {/* Badge Popup (New Badge Earned) */}
      {newBadge && (
        <div className="badge-popup-overlay" onClick={dismissBadge}>
          <div className="badge-popup" onClick={e => e.stopPropagation()}>
            <div className="badge-popup-icon">{newBadge.icon}</div>
            <h2 className="badge-popup-title">Badge Earned!</h2>
            <h3 className="badge-popup-name">{newBadge.name}</h3>
            <p className="badge-popup-desc">{newBadge.description}</p>
            {newBadge.xp_reward > 0 && (
              <div className="badge-popup-xp">+{newBadge.xp_reward} XP</div>
            )}
            <button className="badge-popup-close" onClick={dismissBadge}>
              Awesome!
            </button>
          </div>
        </div>
      )}

      {/* Badges Modal */}
      {showBadges && (
        <div className="badges-modal-overlay" onClick={() => setShowBadges(false)}>
          <div className="badges-modal" onClick={e => e.stopPropagation()}>
            <div className="badges-modal-header">
              <h2>🏆 Badges</h2>
              <button onClick={() => setShowBadges(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="badges-grid">
              {badges.map(badge => {
                const earned = progress.earnedBadges.includes(badge.id)
                return (
                  <div key={badge.id} className={`badge-card ${earned ? 'earned' : 'locked'}`}>
                    <div className="badge-icon">{badge.icon}</div>
                    <div className="badge-name">{badge.name}</div>
                    <div className="badge-desc">{badge.description}</div>
                    {badge.xp_reward > 0 && (
                      <div className="badge-xp">+{badge.xp_reward} XP</div>
                    )}
                    {!earned && <div className="badge-lock">🔒</div>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
