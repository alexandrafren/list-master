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
                    <label>How much time do you have?</label>
                    <br />
                    <input type="radio" value="a few minutes" name="time to complete" onChange={this.handleChangeb}/>
                    <label>A Few Minutes</label>
                    <br />
                    <input type="radio" value="an hour or less" name="time to complete" onChange={this.handleChangeb}/>
                    <label>An Hour or Less</label>
                    <br />
                    <input type="radio" value="a few hours" name="time to complete" onChange={this.handleChangeb}/>
                    <label>A Few Hours</label>
                    <br />
                    <input type="radio" value="all day" name="time to complete" onChange={this.handleChangeb}/>
                    <label>All Day</label>
                    <br />
                    <input type="radio" value="several days" name="time to complete" onChange={this.handleChangeb}/>
                    <label>Several Days</label>
                    <br />
                    <label>How are you feeling?</label>
                    <br />
                    <input type="radio" value="not at all" name="level of difficulty" onChange={this.handleChangec}/>
                    <label>Cool as a cucumber</label>
                    <br />
                    <input type="radio" value="a little bit" name="level of difficulty" onChange={this.handleChangec}/>
                    <label>I've been better, I've been worse</label>
                    <br />
                    <input type="radio" value="a lot" name="level of difficulty" onChange={this.handleChangec}/>
                    <label>Exhausted/Stressed/Generally Filled with Ennui</label>
                    <br />
                    <input type="submit" value="Tell me what to do!"/>
                </form>
      </div>
    )
  }
}

export default SuggestionInput;
