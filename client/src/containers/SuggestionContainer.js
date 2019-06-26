import React, { Component } from 'react'
import { connect } from 'react-redux'
import SuggestionInput from '../components/SuggestionInput'
import Suggestion from '../components/Suggestion'

class SuggestionContainer extends Component {

  //include logic to find a suggestion here

  //render the suggestion, initial should be to add a todo

  suggestionLogic = (suggestionState) => {
    this.props.fetchTodos();
    let suggestionTodos = this.props.todos;
    suggestionTodos = suggestionTodos.filter((todo) todo.time_to_complete === suggestionState.time)
    suggestionTodos.filter((todo) => todo.level_of_difficulty === suggestionState.feeling)
  }

  render() {
    return(
      <div class="column">
        Looking for a Suggested Task?
        <SuggestionInput />
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
    fetchTodos: fetchTodos
  }, dispatch);
}

export default SuggestionContainer;
