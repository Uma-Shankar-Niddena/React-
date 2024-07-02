// Write your code here
import './index.css'

const CommentItem = props => {
  const {data, colourClassNames, likedORunliked, onDelete} = props
  const {userName, userComment, isLike, id} = data

  const onButton = () => {
    likedORunliked(id)
  }

  const likeImges = isLike ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
      className="likeImage"
      alt="liked"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
      className="likeImage"
      alt="like"
    />
  )

  const onDeleteButton = () => {
    onDelete(id)
  }
  return (
    <li className="list-container">
      <div className="top-section">
        <div className={`${colourClassNames}`}>{userName[0]}</div>
        <div className="name-ago">
          <div className="ram">
            <h3 className="name">{userName}</h3>
            <p className="time">how long ago the comment was posted</p>
          </div>
          <div className="comment">
            <p className="usercmt">{userComment}</p>
          </div>{' '}
        </div>
      </div>

      <div className="bottom-part">
        <button className="buttonel" type="button" onClick={onButton}>
          {likeImges}
        </button>
        <button
          className="buttonel"
          type="button"
          data-testid="delete"
          onClick={onDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            className="likeImage"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
