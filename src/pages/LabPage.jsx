import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getChallenge, challenges } from '../data/challenges'
import { usePython } from '../hooks/usePython'
import { useProgress } from '../context/ProgressContext'
import CodeEditor from '../components/CodeEditor'
import './lab.css'

export default function LabPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const challenge = getChallenge(id)
  const [code, setCode] = useState(challenge?.starterCode || '')
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [testResults, setTestResults] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const startTimeRef = useRef(null)
  const { isReady, isLoading, isRunning, runCode } = usePython()
  const { isChallengeComplete, completeChallenge } = useProgress()

  useEffect(() => {
    if (challenge) {
      setCode(challenge.starterCode)
      setTestResults(null)
      setShowHints(false)
      setShowSolution(false)
      setAttempts(0)
      startTimeRef.current = Date.now()
    }
  }, [challenge])

  if (!challenge) {
    return (
      <div className="lab-not-found">
        <h1>Lab not found</h1>
        <Link to="/labs" className="back-link">Back to Labs</Link>
      </div>
    )
  }

  const isComplete = isChallengeComplete(challenge.id)
  const currentIndex = challenges.findIndex(c => c.id === id)
  const nextChallenge = challenges[currentIndex + 1]
  const prevChallenge = challenges[currentIndex - 1]

  const runTests = async () => {
    setTestResults(null)
    setAttempts(prev => prev + 1)
    
    const results = []
    
    for (const testCase of challenge.testCases) {
      const testCode = `${code}\nprint(${testCase.input})`
      const result = await runCode(testCode)
      
      const actual = result.output?.trim() || result.error || ''
      const expected = testCase.expected
      const passed = actual === expected
      
      results.push({
        input: testCase.input,
        expected,
        actual,
        passed,
        error: result.error,
      })
    }
    
    setTestResults(results)
    
    const allPassed = results.every(r => r.passed)
    if (allPassed && !isComplete) {
      const timeMs = Date.now() - startTimeRef.current
      completeChallenge(challenge.id, challenge.xpReward, timeMs, attempts + 1)
    }
  }

  const resetCode = () => {
    setCode(challenge.starterCode)
    setTestResults(null)
  }

  const allPassed = testResults?.every(r => r.passed)

  return (
    <div className="lab-page">
      {/* Header */}
      <header className="lab-header">
        <div className="lab-header-left">
          <Link to="/labs" className="lab-back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </Link>
          <div className="lab-title-section">
            <h1 className="lab-title">
              {challenge.title}
              {isComplete && (
                <span className="lab-complete-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
              )}
            </h1>
            <span className={`lab-difficulty ${challenge.difficulty}`}>
              {'⭐'.repeat({ easy: 1, medium: 2, hard: 3 }[challenge.difficulty])} {challenge.difficulty}
            </span>
          </div>
        </div>
        
        <div className="lab-header-right">
          <button onClick={resetCode} className="lab-btn lab-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            Reset
          </button>
          <button
            onClick={runTests}
            disabled={!isReady || isRunning}
            className="lab-btn lab-btn-primary"
          >
            {isRunning ? (
              <>
                <span className="lab-spinner"></span>
                Running...
              </>
            ) : isLoading ? (
              <>
                <span className="lab-spinner"></span>
                Loading Python...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Run Tests
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="lab-content">
        {/* Left Panel: Description + Editor */}
        <div className="lab-left">
          {/* Challenge Description */}
          <div className="lab-description">
            <div className="lab-description-card">
              <h2>📋 Problem</h2>
              <p>{challenge.description}</p>
              
              <div className="lab-help-buttons">
                <button
                  onClick={() => setShowHints(!showHints)}
                  className={`lab-help-btn ${showHints ? 'active' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 17h.01"/>
                  </svg>
                  {showHints ? 'Hide Hints' : 'Show Hints'}
                </button>
                
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className={`lab-help-btn solution ${showSolution ? 'active' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
              </div>
              
              {showHints && (
                <div className="lab-hints">
                  <h3>💡 Hints</h3>
                  <ul>
                    {challenge.hints.map((hint, i) => (
                      <li key={i}>{hint}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {showSolution && (
                <div className="lab-solution">
                  <h3>✨ Solution</h3>
                  <pre>{challenge.solution}</pre>
                </div>
              )}
            </div>
          </div>

          {/* Code Editor */}
          <div className="lab-editor">
            <div className="lab-editor-header">
              <span>📝 Your Code</span>
              <span className="lab-xp-badge">+{challenge.xpReward} XP</span>
            </div>
            <CodeEditor 
              code={code} 
              onChange={setCode}
            />
          </div>
        </div>

        {/* Right Panel: Test Results */}
        <div className="lab-right">
          <div className="lab-results">
            <h2>🧪 Test Results</h2>
            
            {!testResults && (
              <div className="lab-results-empty">
                <div className="lab-results-empty-icon">▶️</div>
                <p>Click "Run Tests" to check your solution</p>
                <p className="lab-results-empty-sub">Your code will be tested against {challenge.testCases.length} test cases</p>
              </div>
            )}
            
            {testResults && (
              <div className="lab-results-content">
                {/* Summary */}
                <div className={`lab-results-summary ${allPassed ? 'success' : 'failed'}`}>
                  {allPassed ? (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      <span>All tests passed! 🎉</span>
                    </>
                  ) : (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                      <span>{testResults.filter(r => r.passed).length}/{testResults.length} tests passed</span>
                    </>
                  )}
                </div>
                
                {/* Individual Tests */}
                <div className="lab-tests">
                  {testResults.map((result, i) => (
                    <div key={i} className={`lab-test ${result.passed ? 'passed' : 'failed'}`}>
                      <div className="lab-test-header">
                        {result.passed ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                          </svg>
                        )}
                        <span className="lab-test-input">Test {i + 1}: <code>{result.input}</code></span>
                      </div>
                      
                      <div className="lab-test-details">
                        <div className="lab-test-expected">
                          <span>Expected:</span>
                          <code>{result.expected}</code>
                        </div>
                        <div className="lab-test-actual">
                          <span>Got:</span>
                          <code className={result.passed ? '' : 'error'}>
                            {result.error ? `Error: ${result.error}` : result.actual || '(empty)'}
                          </code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Next Challenge */}
                {allPassed && nextChallenge && (
                  <Link to={`/lab/${nextChallenge.id}`} className="lab-next-challenge">
                    <span>Next Lab: {nextChallenge.title}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="lab-navigation">
            {prevChallenge ? (
              <Link to={`/lab/${prevChallenge.id}`} className="lab-nav-btn prev">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Previous
              </Link>
            ) : <div />}
            {nextChallenge && (
              <Link to={`/lab/${nextChallenge.id}`} className="lab-nav-btn next">
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
