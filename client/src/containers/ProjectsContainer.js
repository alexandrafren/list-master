import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectInput from '../components/ProjectInput'
import Project from '../components/Project'
import Todo from '../components/Todo'


class ProjectsContainer extends Component {

  //if todos have a project type !== '', render here
  //filter todos, then map
 // renderProjects = () => this.props.todos.map((todo, i) => <Todo key={i} name={todo.name} />)

  render() {
    return(
      <div>
        Create a Project
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
