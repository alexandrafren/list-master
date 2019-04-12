import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'

class TodosContainer extends Component {

  //renderTodos = () => this.props.todos.map((todo, i) => <Todo key={i} name={todo.name} />)
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    return fetch('api/todo')
    .then(results => {
      return results.json();
    }).then(data => {
      let todos = data.map((todo) => {
        return(todo.name)
      })
      this.setState({todos: todos})
      console.log(this.state.todos)
    })
  }
  
  render() {
    return(
      <div>
        <TodoInput addTodo={this.props.addTodo} />
        {this.state.todos}
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
