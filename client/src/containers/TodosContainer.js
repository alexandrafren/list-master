import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'

class TodosContainer extends Component {

  //renderTodos = () => this.props.todos.map((todo, i) => <Todo key={i} name={todo.name} />)
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
        return(<li>{todo.name}</li>)
      })
      this.setState({todos: todos})
    })
    return fetch('api/project')
    .then(results =>{
      return results.json();
    }).then(data => {
      let projects = data.map((project) => {
        return (<div><input type="radio" value="{project.id}" onChange={this.handleChanged}/><label>{project.name}</label><br /></div>)
      })
      this.setState({projects: projects})
    })
  }
  
  render() {
    return(
      <div className="column">
        Todos:
        {this.state.todos}
        <br />
        <br />
        <TodoInput addTodo={this.props.addTodo} projects={this.state.projects}/>
      </div>
    )
  }
}

//const mapStateToProps = state => {
  //return {
    //todos: state.todos
  //}
//}

//const mapDispatchToProps = (dispatch) => ({addTodo: todo => dispatch({type: 'ADD_TODO', todo}) })

///xport default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

export default TodosContainer;
