import { useState } from 'react'
import './App.css';

function App() {
  const [currentProblem, setCurrentProblem] = useState(generateGame)

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
  return (
    <>
      <div className="main-ui">
        <p className="game">{currentProblem.firstNumber} {currentProblem.operator} {currentProblem.secondNumber}</p>

        <form action="" className="game-form">
          <input type="text" className="form-field" autoComplete="off" />
          <button>Submit</button>
        </form>

        <p className="stat">You needs <span className="points-needed">10</span> more points, and are not allowed to make <span
          className="mistakes-allowed">2</span> more mistakes.
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
