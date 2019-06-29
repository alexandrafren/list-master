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
      suggestedTodo: "You haven't entered any parameters for a Suggestion, or your suggestion didn't match any entered todos",
      suggestionFeeling: "",
      suggestionTime: ""
    }
  }

  //include logic to find a suggestion here
  //render the suggestion, initial should be to add a todo

  suggestionLogic = (suggestionState) => {
    this.props.fetchTodos();
    let suggestionTodos = this.props.todos;
    suggestionTodos = suggestionTodos.filter((todo) => todo.time_to_complete === suggestionState.time)
    suggestionTodos.filter((todo) => todo.level_of_difficulty === suggestionState.feeling)
    console.log(suggestionTodos)
    console.log( typeof suggestionTodos[this.state.index])
    if (suggestionTodos.length < this.state.index) {
      this.setState({
        suggestedTodo: "There are no more Suggested Todos that fit your parameters. Try entering new parameters or adding todos"
      })
    }
    else {
    let updateIndex = this.state.index + 1
    this.setState({
      suggestedTodo: <><Todo props={suggestionTodos[this.state.index]} deleteTodo={this.props.deleteTodo} /><button onClick={this.pushButton}>Want a different suggestion?</button></>,
      suggestionFeeling: suggestionState.feeling,
      suggestionTime: suggestionState.time,
      index: updateIndex
    })
  }
}

  pushButton = (event) => {
    event.preventDefault()
    let sugparams = this.state
    console.log(sugparams)
    this.suggestionLogic(sugparams)
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

