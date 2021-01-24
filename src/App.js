import { useState } from 'react'
import './App.css';

function App() {
  return (
    <>
      <div className="main-ui">
        <p className="game"></p>

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
