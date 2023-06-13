// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, addEmojiID} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const addId = () => {
    addEmojiID(id)
  }
  return (
    <li className="emoji-card">
      <button className="emoji-button" onClick={addId} type="button">
        <img src={emojiUrl} className="emoji-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
