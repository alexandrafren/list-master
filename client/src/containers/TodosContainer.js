import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'
import { bindActionCreators } from 'redux';
import { fetchTodos, postTodo, updateTodo, deleteTodo} from '../actions/todoActions'
import './Todo.css'

class TodosContainer extends Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  filterTodos = () => {
    return this.props.todos.map((todo) => <Todo props={todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />)
  }
  
  render() {
    return(
      <div class="column" className="todo">
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
    postTodo: postTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
  }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

