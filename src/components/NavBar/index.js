// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStart} = props

  return (
    <nav className="nav-bar-container">
      <div className="logo-section-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      <div className="score-container">
        {gameStart && <p className="score">Score: {score}</p>}
        {gameStart && <p className="top-score">Top Score: {topScore}</p>}
      </div>
    </nav>
  )
}

export default NavBar
