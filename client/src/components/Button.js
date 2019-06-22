import React, { Component } from 'react'

class Button extends Component {
  constructor(){
    super();
    this.state = {
      style: 'display: none'
    }
  }

  //todos container passes 

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      completed: true
    })
    this.props.updateTodo(this.state)
  }

  render() {
    return(
      <>
      <button id="todobutton"style={this.state.style}>Mark as Completed?</button>
      </>
    )
  }

}

export default Todo;