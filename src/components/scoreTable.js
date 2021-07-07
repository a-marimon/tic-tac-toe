
const ScoreTable = (props) => {
  const winner = props.winner
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

export default ScoreTable