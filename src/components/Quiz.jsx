import { useState } from 'react'

function Quiz({ quiz }) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmitted(true)
    }
  }

  const isCorrect = selectedOption === quiz.correct

  const formatQuestion = (text) => {
    return text.replace(/\n/g, '<br/>')
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <path d="M12 17h.01"/>
        </svg>
        <span>Quick Quiz</span>
      </div>

      <p 
        className="quiz-question"
        dangerouslySetInnerHTML={{ __html: formatQuestion(quiz.question) }}
      />

      <div className="quiz-options">
        {quiz.options.map((option) => {
          let optionClass = 'quiz-option'
          if (submitted) {
            if (option.id === quiz.correct) {
              optionClass += ' correct'
            } else if (option.id === selectedOption && option.id !== quiz.correct) {
              optionClass += ' incorrect'
            }
          } else if (option.id === selectedOption) {
            optionClass += ' selected'
          }

          return (
            <div
              key={option.id}
              className={optionClass}
              onClick={() => !submitted && setSelectedOption(option.id)}
            >
              <span className="option-marker">
                {submitted && option.id === quiz.correct ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : submitted && option.id === selectedOption && option.id !== quiz.correct ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  option.id.toUpperCase()
                )}
              </span>
              <span className="option-text">{option.text}</span>
            </div>
          )
        })}
      </div>

      {!submitted ? (
        <button 
          className="quiz-submit gradient-btn"
          onClick={handleSubmit}
          disabled={!selectedOption}
        >
          Check Answer
        </button>
      ) : (
        <div className={`quiz-result ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="result-header">
            {isCorrect ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Correct! 🎉
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                Not quite!
              </>
            )}
          </div>
          <p className="result-explanation">{quiz.explanation}</p>
          <button 
            className="quiz-retry"
            onClick={() => {
              setSelectedOption(null)
              setSubmitted(false)
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz
