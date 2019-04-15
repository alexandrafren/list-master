import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectInput from '../components/ProjectInput'
import Project from '../components/Project'


class ProjectsContainer extends Component {

  //if todos have a project type !== '', render here
  //filter todos, then map
 // renderProjects = () => this.props.todos.map((todo, i) => <Todo key={i} name={todo.name} />)

  constructor() {
    super();
    this.state = {
      todos: [],
      projects: []
    }
  }
 componentDidMount(){
  fetch('api/todo')
  .then(results => {
    return results.json();
  }).then(data => {
    let todos = data.map((todo) => {
      return todo
    })
    this.setState({todos: todos})
  })
   fetch('api/project')
  .then(results =>{
    return results.json();
  }).then(data => {
    let projects = data.map((project) => {
      return project
    })
    this.setState({projects: projects})
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
