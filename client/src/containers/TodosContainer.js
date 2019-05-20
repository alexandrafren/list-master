import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'
import { bindActionCreators } from 'redux';
import { fetchTodos, postTodo } from '../actions/todoActions'

class TodosContainer extends Component {

  componentDidMount(){
    this.props.fetchTodos();
    //return fetch('api/project')
    //.then(results =>{
      //return results.json();
    //}).then(data => {
      //let projects = data.map((project) => {
        //return (<div><input type="radio" value="{project.id}" onChange={this.handleChanged}/><label>{project.name}</label><br /></div>)
      //})
      //this.setState({projects: projects})
    //})
    //projects={this.state.projects} intodo input
  }

  filterTodos = () => {
    //return this.state.todos.filter(Boolean)
    return this.props.todos.map((todo) => <li>{todo.name}</li>)
  }
  
  render() {
    return(
      <div className="column">
        Todos:
        {this.filterTodos()}
        <br />
        <br />
        <TodoInput postTodo={this.props.postTodo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTodos: fetchTodos,
    postTodo: postTodo
  }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

