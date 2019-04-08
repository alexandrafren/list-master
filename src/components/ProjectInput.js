import React, { Component } from 'react'

class ProjectInput extends Component {
    constructor(){
        super();
        this.state = {
            name: ''
        }
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
