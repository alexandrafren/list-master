import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectInput from '../components/ProjectInput'
import Project from '../components/Project'

class ProjectsContainer extends Component {

  //if todos have a project type !== '', render here
  //filter todos, then map
  renderProjects = () => this.props.todos.map((todo, i) => <Todo key={i} name={todo.name} />)

  render() {
    return(
      <div>
        <ProjectInput addProject={this.props.addProject} />
        {this.renderProjects()}
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
