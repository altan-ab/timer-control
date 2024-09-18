import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  return <Timer />
}

function Timer() {
  const [minutes, setMinutes] = useState(4)
  const [seconds, setSeconds] = useState(2)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const savedTime = useRef({ minutes: 0, seconds: 0 })

  // Zamanlayıcıyı başlatma
  const handleStart = () => {
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds)

    setTimeLeft(totalSeconds)

    savedTime.current = {
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    }
    setIsRunning(true)
    setIsPaused(false)
  }

  // Zamanlayıcıyı duraklatma/devam etme
  const handlePauseResume = () => {
    setIsPaused(!isPaused)
  }

  // Zamanlayıcıyı sıfırlama
  const handleReset = () => {
    setIsRunning(false)
    setIsPaused(false)
    setTimeLeft(savedTime.current.minutes * 60 + savedTime.current.seconds)
  }

  // Zamanlayıcı geri sayımını yönetme
  useEffect(() => {
    let timer = null
    if (isRunning && !isPaused && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
    }
    return () => clearTimeout(timer)
  }, [isRunning, isPaused, timeLeft])

  // Dakika ve saniyeleri hesaplama
  const displayMinutes = Math.floor(timeLeft / 60)
  const displaySeconds = timeLeft % 60

  return (
    <div className="timer-container">
      <div>
        <label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            disabled={isRunning}
          />
          Minutes
        </label>
        <br />
        <label>
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            disabled={isRunning}
          />
          Seconds
        </label>
      </div>
      <br />
      <div>
        <button onClick={handleStart} disabled={isRunning && !isPaused}>
          START
        </button>
        <button onClick={handlePauseResume} disabled={!isRunning}>
          {isPaused ? 'RESUME' : 'PAUSE'}
        </button>
        <button onClick={handleReset}>RESET</button>
      </div>
      <h1>
        {displayMinutes.toString().padStart(2, '0')}:
        {displaySeconds.toString().padStart(2, '0')}
      </h1>
    </div>
  )
}

export default App
