import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import Todo from '../components/Todo'
import { bindActionCreators } from 'redux';
import { fetchTodos, postTodo } from '../actions/todoActions'

class TodosContainer extends Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  filterTodos = () => {
    //return this.state.todos.filter(Boolean)
    return this.props.todos.map((todo) => <li><input type="checkbox" onChange={this.handleChange} />{todo.name}</li>)
  }

  handleChange = () => {
    //set state so that completed is true
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

