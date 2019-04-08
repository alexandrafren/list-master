import React, { Component } from 'react'

class SuggestionInput extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      feeling: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    //run logic that will return a suggestion
    this.setState({
      time:'',
      feeling: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>How are you feeling?</label>
            <input type="text" onChange={this.handleChange} value={this.state.feeling}/>
          <label>How much time do you have?</label>
            <input type="text" onChange={this.handleChange} value={this.state.time}/>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default SuggestionInput;
