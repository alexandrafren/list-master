import React, { Component } from 'react'
import { connect } from 'react-redux'
import SuggestionInput from '../components/SuggestionInput'
import Todo from '../components/Todo'
import { bindActionCreators } from 'redux';
import { fetchTodos, deleteTodo} from '../actions/todoActions'

class SuggestionContainer extends Component {

  constructor(){
    super();
    this.state = {
      index: 0,
      suggestedTodo: "You haven't entered any parameters for a Suggestion, or your suggestion didn't match any entered todos"
    }
  }

  //include logic to find a suggestion here
  //render the suggestion, initial should be to add a todo

  suggestionLogic = (suggestionState) => {
    this.props.fetchTodos();
    let suggestionTodos = this.props.todos;
    suggestionTodos = suggestionTodos.filter((todo) => todo.time_to_complete === suggestionState.time)
    suggestionTodos.filter((todo) => todo.level_of_difficulty === suggestionState.feeling)
    this.setState({
      suggestedTodo: <Todo props={suggestionTodos[this.state.index]} deleteTodo={this.props.deleteTodo} />
    })
  }

  render() {
    return(
      <div class="column">
        Looking for a Suggested Task?
        <SuggestionInput suggestionLogic={this.suggestionLogic}/>
        <br />
        Your Suggestion: 
        <br />
        {this.state.suggestedTodo}
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
    deleteTodo: deleteTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionContainer);

