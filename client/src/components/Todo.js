import React, { Component } from 'react'

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      time_to_complete: '',
      level_of_difficulty: '',
      completed: false,
      style: {display: 'none'}
    }
  }

  componentDidMount(){
      this.setState({
        name: this.props.props.name,
        time_to_complete: this.props.props.time_to_complete,
        level_of_difficulty: this.props.props.level_of_difficulty
      })
  }

  handleChange = () => {
    this.setState({
      style: {display: 'inline'}
    })
  }

  handleSubmit = event => {
    let statepop = this.state;
    delete statepop.style;
    statepop.completed = true;
    this.props.updateTodo(statepop)
  }

  render() {
    return(
      <>
      <li><input type="checkbox" onClick={this.handleChange} />{this.props.props.name}</li><button id="todobutton"style={this.state.style} onClick={this.handleSubmit}>Mark as Completed?</button>
      </>
    )
  }

}

export default Todo;