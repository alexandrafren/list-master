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
                <form onSubmit={this.handleSubmit} id="projectData">
                <label>Create A New Project</label>
                <br />
                    After creating a project, you can add todos to it to keep your tasks more organized.
                    <input type="text" onChange={this.handleChange} value={this.state.name}/>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ProjectInput;
