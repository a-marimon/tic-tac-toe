// HOOKS
import { useState } from 'react'

// IMPORT COMPONENTS
import Board from './components/board'
import ScoreTable from './components/scoreTable'


const Game = () => {
  // STATE VARIABLES
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [xMoveFirst, setXMoveFirst] = useState(true)

  // HANDLE CLICK will decide what should happen when a box is click in the tic-tac-toe board
  const handleClick = (sq, i) => {
    const squares = sq.slice()
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
  
    squares[i] = xIsNext ? 'X' : "O"
    setSquares(squares)
    setXIsNext(!xIsNext)
  }

  // RESET BOARD will reset all square values to null
  const resetBoard = () => {
    setSquares(Array(9).fill(null))
    setXMoveFirst(!xMoveFirst)

    if (xMoveFirst) {
      setXIsNext(false)
    }else {
      setXIsNext(true)
    }
  }
    
  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={squares}
          xIsNext={xIsNext}
          onClick={(i) => {handleClick(squares, i)}}
          winner={calculateWinner(squares)}
        />
      </div>
      <div className="game-info">
        <ScoreTable winner={calculateWinner(squares)}/>
        <button  onClick={()=>{resetBoard()}}>Reset</button>
      </div>
    </div>
  )
}

// CALCULATE WINNER will compare the current value of each square on the board and dictate the game status
const  calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null; 
}


export default Game