import {Component} from 'react'

import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentList = []
const randomNum = Math.ceil(
  Math.random() * initialContainerBackgroundClassNames.length - 1,
)
const colourClassNames = initialContainerBackgroundClassNames[randomNum]

class Comments extends Component {
  state = {
    commentList: initialCommentList,
    userName: '',
    userComment: '',
    isLike: false,
  }

  onchangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({userComment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {userName, userComment, isLike} = this.state
    const newComment = {
      id: uuidv4(),
      userName,
      userComment,
      isLike,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      userName: '',
      userComment: '',
    }))
  }

  likedORunliked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onDelete = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(each => each.id !== id)
    this.setState({commentList: filteredList})
  }

  render() {
    const {commentList, userName, userComment} = this.state
    const lengthOf = commentList.length
    return (
      <div className="contianer">
        <div className="total-container">
          <div className="for-top-part">
            <form onSubmit={this.onAddComment}>
              <div className="inner-div">
                <h1 className="head">Comments</h1>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                  className="img"
                  alt="comments"
                />

                <p className="para">Say Something about 4.0 Technologies</p>

                <input
                  onChange={this.onchangeName}
                  className="name-input"
                  placeholder="Your name"
                  value={userName}
                />

                <textarea
                  id="ram"
                  onChange={this.onChangeComment}
                  rows="5"
                  cols="60"
                  value={userComment}
                  className="text-area"
                  placeholder="Your Comment"
                >
                  {userComment}
                </textarea>

                <button className="btn" type="submit">
                  Add Comment
                </button>
              </div>
            </form>
            <div className="img-contianer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="img2"
                alt="comments"
              />
            </div>
          </div>
        </div>
        <div className="no-of-comments-section">
          <span className="comment-section">{lengthOf}</span>
          <p className="para">Comments</p>
        </div>
        <div className="un-list">
          <ul className="unorderd-list">
            {commentList.map(each => (
              <CommentItem
                data={each}
                likedORunliked={this.likedORunliked}
                key={each.id}
                onDelete={this.onDelete}
                colourClassNames={colourClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
// Write your code here
export default Comments
