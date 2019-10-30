import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'
import { bindActionCreators } from 'redux';
import { fetchTodos, postTodo, updateTodo, deleteTodo} from '../actions/todoActions'

class TodosContainer extends Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  
  render() {
    return(
        <div class="sidenav">
		{this.props.todos}
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

