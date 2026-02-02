import { useState } from 'react'

function CodeEditor({ code, language, filename }) {
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  const lines = code.split('\n')

  const runCode = () => {
    setIsRunning(true)
    
    // Simulate running Python code
    setTimeout(() => {
      try {
        const fakeOutput = simulatePython(code)
        setOutput(fakeOutput)
      } catch (e) {
        setOutput(`Error: ${e.message}`)
      }
      setIsRunning(false)
    }, 500)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Very simple Python output simulator
  const simulatePython = (code) => {
    const outputs = []
    const lines = code.split('\n')
    
    const vars = {}
    
    for (const line of lines) {
      // Skip comments and empty lines
      if (line.trim().startsWith('#') || !line.trim()) continue
      
      // Simple print statements
      const printMatch = line.match(/print\((.+)\)/)
      if (printMatch) {
        let content = printMatch[1].trim()
        
        // Handle f-strings
        if (content.startsWith('f"') || content.startsWith("f'")) {
          content = content.slice(2, -1)
          // Replace {var} with placeholder values
          content = content.replace(/\{([^}]+)\}/g, (match, expr) => {
            if (expr.includes('+')) return '[calculated]'
            if (expr.includes(':')) return '[formatted]'
            return vars[expr] || expr
          })
          outputs.push(content)
        } else if (content.startsWith('"') || content.startsWith("'")) {
          // Regular string
          outputs.push(content.slice(1, -1))
        } else {
          outputs.push(content)
        }
      }
      
      // Simple variable assignments
      const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/)
      if (assignMatch && !line.includes('def ')) {
        const [, name, value] = assignMatch
        vars[name] = value.replace(/["']/g, '').trim()
      }
    }
    
    return outputs.length > 0 
      ? outputs.join('\n') 
      : '✨ Code executed successfully!'
  }

  const highlightCode = (code) => {
    // First escape HTML
    let escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    
    const keywords = ['def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'not', 'and', 'or', 'True', 'False', 'None', 'import', 'from', 'class', 'try', 'except', 'finally', 'with', 'as', 'raise', 'break', 'continue', 'pass', 'lambda']
    const builtins = ['print', 'len', 'range', 'str', 'int', 'float', 'list', 'dict', 'set', 'type', 'open', 'sum', 'min', 'max', 'sorted', 'enumerate', 'zip', 'map', 'filter', 'isinstance', 'super']
    
    return escaped
      // Comments first (they shouldn't be further processed)
      .replace(/(#.*)$/gm, '§COM§$1§/COM§')
      // Strings
      .replace(/(f?&quot;[^&]*&quot;|f?&#39;[^&]*&#39;|f?"[^"]*"|f?'[^']*')/g, '§STR§$1§/STR§')
      // Numbers
      .replace(/\b(\d+\.?\d*)\b/g, '§NUM§$1§/NUM§')
      // Keywords (but not inside already tagged)
      .replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'), '§KEY§$1§/KEY§')
      // Builtins
      .replace(new RegExp(`\\b(${builtins.join('|')})\\b(?=\\()`, 'g'), '§BLT§$1§/BLT§')
      // Convert markers to spans
      .replace(/§COM§/g, '<span class="comment">').replace(/§\/COM§/g, '</span>')
      .replace(/§STR§/g, '<span class="string">').replace(/§\/STR§/g, '</span>')
      .replace(/§NUM§/g, '<span class="number">').replace(/§\/NUM§/g, '</span>')
      .replace(/§KEY§/g, '<span class="keyword">').replace(/§\/KEY§/g, '</span>')
      .replace(/§BLT§/g, '<span class="builtin">').replace(/§\/BLT§/g, '</span>')
  }

  return (
    <div className="code-editor">
      <div className="editor-header">
        <div className="editor-tabs">
          <div className="editor-tab active">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            </svg>
            {filename}
          </div>
        </div>
        <div className="editor-actions">
          <button className="copy-btn" onClick={copyCode} title="Copy code">
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            )}
          </button>
          <button className="run-btn" onClick={runCode} disabled={isRunning}>
            {isRunning ? (
              <>
                <div className="spinner"></div>
                Running...
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Run
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="editor-content">
        <div className="line-numbers">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre 
          className="code-area"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </div>

      {output && (
        <div className="output-area">
          <div className="output-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 17 10 11 4 5"/>
              <line x1="12" y1="19" x2="20" y2="19"/>
            </svg>
            Output
          </div>
          <pre className="output-content">{output}</pre>
        </div>
      )}
    </div>
  )
}

export default CodeEditor
