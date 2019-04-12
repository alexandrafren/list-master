import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, i) => <Todo key={i} name={todo.name} />)

  render() {
    return(
      <div>
        <TodoInput addTodo={this.props.addTodo} />
        {this.renderTodos()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({addTodo: todo => dispatch({type: 'ADD_TODO', todo}) })

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
