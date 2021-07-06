import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

const Score = (props) => {
  const winner = calculateWinner(props.squares)
  let xWins = 0
  let xLoses = 0

  if (winner && winner === 'X') {
    xWins = xWins + 1
  } else if (winner && winner === 'O') {
    xLoses = xLoses + 1
  }

  return (
    <div className="score-table">
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
            <th>Loses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X</td>
            <td>{xWins}</td>
            <td>{xLoses}</td>
          </tr>
          <tr>
            <td>O</td>
            <td>{xLoses}</td>
            <td>{xWins}</td>
          </tr>
          </tbody>
      </table>
    </div>
  )
}
  
const Board = (props) => {
  const winner = calculateWinner(props.squares)
  let status

  if(winner) {
    status = 'Winner' + winner
  } else {
    status = `Next player: ${props.xIsNext ? 'X' : 'O'}`
  }


  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square 
          value={props.squares[0]}
          onClick={() => props.onClick(0)}
        />
        <Square 
          value={props.squares[1]}
          onClick={() => props.onClick(1)}
        />
        <Square 
          value={props.squares[2]}
          onClick={() => props.onClick(2)}
        />
      </div>
      <div className="board-row">
        <Square 
          value={props.squares[3]}
          onClick={() => props.onClick(3)}
        />
        <Square 
          value={props.squares[4]}
          onClick={() => props.onClick(4)}
        />
        <Square 
          value={props.squares[5]}
          onClick={() => props.onClick(5)}
        />
      </div>
      <div className="board-row">
        <Square 
          value={props.squares[6]}
          onClick={() => props.onClick(6)}
        />
        <Square 
          value={props.squares[7]}
          onClick={() => props.onClick(7)}
        />
        <Square 
          value={props.squares[8]}
          onClick={() => props.onClick(8)}
        />
      </div>
    </div>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      score: {
        xWins: 0,
        xLoses: 0
      }
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : "O"
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.state.squares}
            xIsNext={this.state.xIsNext}
            onClick={(i) => {this.handleClick(i)}}
          />
          <Score squares={this.state.squares}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  