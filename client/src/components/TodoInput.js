import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            time_to_complete: '',
            level_of_difficulty: '',
            completed: false
        }
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log('A');
      this.props.postTodo(this.state);
      console.log('B');
      this.setState({
          name: '',
          time_to_complete: '',
          level_of_difficulty: ''
      })
    }
    
    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeb = event => {
        this.setState({
            time_to_complete: event.target.value
        })
    }

    handleChangec = event => {
        this.setState({
            level_of_difficulty: event.target.value
        })
    }

    handleChanged = event => {
        this.setState({
            project_id: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div class="column">
                    <label>Add a New Todo</label>
                    <br />
                    <input type="text" onChange={this.handleChange} value={this.state.name}/>
                    <br />
                    <label>How long will this task take to complete?</label>
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
                </div>
                <div class="column">
                    <label>How much are you dreading doing this?</label>
                    <br />
                    <input type="radio" value="not at all" name="level of difficulty" onChange={this.handleChangec}/>
                    <label>Not at all!</label>
                    <br />
                    <input type="radio" value="a little bit" name="level of difficulty" onChange={this.handleChangec}/>
                    <label>Some</label>
                    <br />
                    <input type="radio" value="a lot" name="level of difficulty" onChange={this.handleChangec}/>
                    <label>Quite a bit </label>
                    <br />
                    <input type="submit" value="Add New Todo"/>
                </div>
                </form>
            </div>
        )
    }
}


export default TodoInput;
