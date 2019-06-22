import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'
import { bindActionCreators } from 'redux';
import { fetchTodos, postTodo, updateTodo } from '../actions/todoActions'

class TodosContainer extends Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  filterTodos = () => {
    let todos = this.props.todos.filter(function (todo) {
      return todo.completed === false;
    });
    todos = this.props.todos.map((todo) => <Todo props={todo} updateTodo={this.props.updateTodo} />)
    return todos
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
    postTodo: postTodo,
    updateTodo: updateTodo
  }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

