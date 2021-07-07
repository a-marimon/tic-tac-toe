import { useState, useEffect } from 'react'

const ScoreTable = (props) => {
  const [xWins, setXWins] = useState(0)
  const [xLoses, setXLoses] = useState(0)

  const winner = props.winner

  useEffect(() => {
    if (winner && winner === 'X') {
      setXWins(xWins => xWins + 1)
    } else if (winner && winner === 'O') {
      setXLoses(xLoses => xLoses + 1)
    }
  }, [winner])

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

export default ScoreTable