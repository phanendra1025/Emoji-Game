// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWinOrLose, playAgain} = props

  console.log(isWinOrLose)

  const imageUrl = isWinOrLose
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const greeting = isWinOrLose ? 'You Won' : 'You Lose'

  const scoreText = isWinOrLose ? 'Best Score' : 'Score'

  const restartTheGame = () => {
    playAgain()
  }

  return (
    <div className="win-card-container">
      <div className="greetings-container">
        <h1 className="greeting">{greeting}</h1>
        <p className="best-score-text">{scoreText}</p>
        <p className="final-score">12/{score}</p>
        <button
          type="button"
          onClick={restartTheGame}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <div className="result-image-container">
        <img className="win-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
