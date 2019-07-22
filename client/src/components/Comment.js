import React, { Component } from 'react'

class Comment extends Component {
  constructor(){
    super();
    this.state = {
      text: ""
    }
  }

  componentDidMount(){
  }

  render() {
    return(
      <p>{this.state.text}</p>
    )
  }

}

export default Comment;