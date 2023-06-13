/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojisIdList: [],
    gameStart: true,
    isWinOrLose: false,
  }

  setTopScore = () => {
    const {score, topScore} = this.state
    console.log(score, topScore)
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }

  playAgain = () => {
    this.setState({gameStart: true})
    this.setState({score: 0})
    this.setState({emojisIdList: []})
    this.setTopScore()
  }

  checkEmojiID = id => {
    const {emojisIdList} = this.state
    const isPresent = emojisIdList.includes(id)
    return isPresent
  }

  checkScore = () => {
    const {score} = this.state
    console.log(score)

    if (score === 11) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({gameStart: false})
      this.setState({isWinOrLose: true})
    } else {
      this.setState(prevState => ({score: prevState.score + 1}))
    }
  }

  addEmojiID = id => {
    this.setState(prev => ({emojisIdList: [...prev.emojisIdList, id]}))
    const isIdPresent = this.checkEmojiID(id)

    if (isIdPresent) {
      this.setState({gameStart: false})
      this.setState({isWinOrLose: false})
    } else {
      this.checkScore()
    }
  }

  render() {
    const {score, topScore, gameStart, isWinOrLose} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const gameEmojisList = shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar score={score} gameStart={gameStart} topScore={topScore} />
        {gameStart && (
          <div className="game-container">
            <ul className="emoji-cards-container">
              {gameEmojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  addEmojiID={this.addEmojiID}
                  key={eachEmoji.id}
                />
              ))}
            </ul>
          </div>
        )}
        {!gameStart && (
          <div className="win-or-lose-card-container">
            <WinOrLoseCard
              isWinOrLose={isWinOrLose}
              playAgain={this.playAgain}
              score={score}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
