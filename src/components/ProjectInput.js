import React, { Component } from 'react'

class ProjectInput extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
    }
    
    handleSubmit = event => {
      event.preventDefault();
      this.props.addTodo(this.state)
      this.setState({
          name: ''
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
                <label>Add Todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.name}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default ProjectInput;
