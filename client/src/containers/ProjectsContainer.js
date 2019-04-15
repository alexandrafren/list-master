import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectInput from '../components/ProjectInput'
import Project from '../components/Project'


class ProjectsContainer extends Component {

  //if todos have a project type !== '', render here
  //filter todos, then map
 // renderProjects = () => this.props.todos.map((todo, i) => <Todo key={i} name={todo.name} />)

 componentDidMount(){
  return fetch('api/todo')
  .then(results => {
    return results.json();
  }).then(data => {
    let todos = data.map((todo) => {
      return(<li>{todo.name}</li>)
    })
    this.setState({todos: todos})
    console.log(this.state.todos)
  })
}


  render() {
    return(
      <div class="column">
        //List Projects and their corresponding to-dos//
        <ProjectInput addProject={this.props.addProject} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({addProject: project => dispatch({type: 'ADD_PROJECT', project}) })

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
