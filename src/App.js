import { useState } from 'react'
import './App.css';

function App() {
  const [score, setScore] = useState(0)
  const [mistakesAllowed, setMistakesAllowed] = useState(0)

  const [currentProblem, setCurrentProblem] = useState(generateGame)
  const [userValue, setUserValue] = useState("")

  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
  }

  function generateGame() {
    return {
      firstNumber: generateNumber(10),
      secondNumber: generateNumber(10),
      operator: ['+', '-', 'x'][generateNumber(2)]
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    let correctAnswer
    if (currentProblem.operator === "+") correctAnswer = currentProblem.firstNumber + currentProblem.secondNumber
    if (currentProblem.operator === "-") correctAnswer = currentProblem.firstNumber - currentProblem.secondNumber
    if (currentProblem.operator === "*") correctAnswer = currentProblem.firstNumber * currentProblem.secondNumber

    if (parseInt(userValue) === correctAnswer) {
      setScore(prev => prev + 1)
    } else {
      setMistakesAllowed(prev => prev + 1)
    }
    setCurrentProblem(generateGame())
    setUserValue("")
  }
  return (
    <>
      <div className="main-ui">
        <p className="game">{currentProblem.firstNumber} {currentProblem.operator} {currentProblem.secondNumber}</p>

        <form onSubmit={handleSubmit} action="" className="game-form">
          <input value={userValue} onChange={e => setUserValue(e.target.value)} type="text" className="form-field" autoComplete="off" />
          <button>Submit</button>
        </form>

        <p className="stat">You needs {10 - score} more points, and are not allowed to make {(2 - mistakesAllowed) > 0 ? 2 - mistakesAllowed : 0} more mistakes.
        </p>

        <ProgressBar />
      </div>

      <div className="overlay">
        <div className="overlay-inner">
          <p className="end-message"></p>
          <button className="reset-button">Start Over</button>
        </div>
      </div>
    </>
  );
}

function ProgressBar() {
  return (
    <div className="progress">
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="progress-inner"></div>
    </div>
  )
}

export default App;
