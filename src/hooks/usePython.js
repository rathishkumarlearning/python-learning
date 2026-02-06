import { useState, useEffect, useCallback, useRef } from 'react'

// Use Pyodide for browser-based Python execution
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'

export function usePython() {
  const [isReady, setIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState(null)
  const pyodideRef = useRef(null)

  // Load Pyodide
  useEffect(() => {
    async function loadPyodide() {
      try {
        setIsLoading(true)
        setError(null)

        // Check if already loaded
        if (window.pyodide) {
          pyodideRef.current = window.pyodide
          setIsReady(true)
          setIsLoading(false)
          return
        }

        // Load Pyodide script
        if (!window.loadPyodide) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = `${PYODIDE_CDN}pyodide.js`
            script.onload = resolve
            script.onerror = reject
            document.head.appendChild(script)
          })
        }

        // Initialize Pyodide
        const pyodide = await window.loadPyodide({
          indexURL: PYODIDE_CDN,
        })

        window.pyodide = pyodide
        pyodideRef.current = pyodide
        setIsReady(true)
      } catch (err) {
        console.error('Failed to load Pyodide:', err)
        setError('Failed to load Python runtime')
      } finally {
        setIsLoading(false)
      }
    }

    loadPyodide()
  }, [])

  // Run Python code
  const runCode = useCallback(async (code) => {
    if (!pyodideRef.current) {
      return { output: '', error: 'Python not ready' }
    }

    setIsRunning(true)
    setError(null)

    try {
      // Capture stdout
      pyodideRef.current.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `)

      // Run the user's code
      try {
        await pyodideRef.current.runPythonAsync(code)
      } catch (err) {
        // Get stderr if available
        const stderr = pyodideRef.current.runPython('sys.stderr.getvalue()')
        return { output: '', error: err.message || stderr || 'Runtime error' }
      }

      // Get stdout
      const stdout = pyodideRef.current.runPython('sys.stdout.getvalue()')
      
      return { output: stdout, error: null }
    } catch (err) {
      return { output: '', error: err.message || 'Unknown error' }
    } finally {
      setIsRunning(false)
    }
  }, [])

  // Run code with timeout
  const runCodeWithTimeout = useCallback(async (code, timeoutMs = 10000) => {
    return Promise.race([
      runCode(code),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Code execution timed out')), timeoutMs)
      )
    ]).catch(err => ({ output: '', error: err.message }))
  }, [runCode])

  return {
    isReady,
    isLoading,
    isRunning,
    error,
    runCode,
    runCodeWithTimeout,
  }
}
