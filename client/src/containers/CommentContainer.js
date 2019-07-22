import React, { Component } from 'react'
import CommentInput from '../components/CommentInput'
import Comment from '../components/Comment'

class CommentContainer extends Component {

    constructor(){
        super();
        this.state = {
            comments: []
        }
    }

  addComment = (commentInput) => {
    this.setState({
        comments: (this.state.comments.concat(commentInput))
    })
  }

  formatComments = () => {
      return this.state.comments.map((comment) => <><p>{comment}</p></>)
  }

  
  render() {
    return(
    <>
        <div className="comment">
        <CommentInput addComment={this.addComment} />
        Comments:
        {this.formatComments()}
        </div>
    </>
    )
  }
}


export default CommentContainer;

