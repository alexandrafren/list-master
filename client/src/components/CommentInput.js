import React, { Component } from 'react'

class CommentInput extends Component {
    constructor(){
        super();
        this.state = {
            text: ""
        }
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.addComment(this.state.text)
      this.setState({
          text: ''
      })
    }
    
    handleChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Add a New Comment</label>
                    <br />
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                </div>
                </form>
            </div>
        )
    }
}


export default CommentInput;
