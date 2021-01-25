import { useState } from 'react'
import './App.css';

function App() {
  const [score, setScore] = useState(0)
  const [mistakesAllowed, setMistakesAllowed] = useState(0)

  const [currentProblem, setCurrentProblem] = useState(generateGame)
  const [userAnswer, setUserAnswer] = useState("")

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
    if (currentProblem.operator === "x") correctAnswer = currentProblem.firstNumber * currentProblem.secondNumber

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(prev => prev + 1) // to make state pure, use prev value
    } else {
      setMistakesAllowed(prev => prev + 1)
    }
    setCurrentProblem(generateGame())
    setUserAnswer("")
  }

  function resetGame() {
    setScore(0)
    setMistakesAllowed(0)
    setUserAnswer("")
    setCurrentProblem(generateGame())
  }

  return (
    <>
      <div className={"main-ui" + ((mistakesAllowed === 3 || score === 10) ? " blurred" : "")}>
        <p className="game">{currentProblem.firstNumber} {currentProblem.operator} {currentProblem.secondNumber}</p>

        {/*  single source of truth is our data, not the DOM, we won't go through the DOM search path,
             instead tie the html element with the state. When a related state attribute is updated.
             React automatically updates the corresponding html element. see <input value={} .../>
         */}
        <form onSubmit={handleSubmit} action="" className="game-form">
          <input value={userAnswer} onChange={e => setUserAnswer(e.target.value)} type="text" className="form-field" autoComplete="off" />
          <button>Submit</button>
        </form>

        <p className="stat">You needs {10 - score} more points, and are not allowed to make {(2 - mistakesAllowed) > 0 ? 2 - mistakesAllowed : 0} more mistakes.
        </p>

        <ProgressBar score={score} />
      </div>

      <div className={"overlay" + (mistakesAllowed === 3 || score === 10 ? " overlay--visible" : "")}>
        <div className="overlay-inner">
          <p className="end-message">{score === 10 ? "Congrats! You won." : "Sorry! You lost."}</p>
          <button onClick={resetGame} className="reset-button">Start Over</button>
        </div>
      </div>
    </>
  );
}

function ProgressBar(props) {
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
      {/* add style with CSS object*/}
      <div className="progress-inner" style={{ transform: `scaleX(${props.score / 10})` }}></div>
    </div>
  )
}

export default App;
