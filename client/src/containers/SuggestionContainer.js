import React, { Component } from 'react'
import { connect } from 'react-redux'
import SuggestionInput from '../components/SuggestionInput'
import Suggestion from '../components/Suggestion'

class SuggestionContainer extends Component {

  //include logic to find a suggestion here

  //render the suggestion, initial should be to add a todo

  render() {
    return(
      <div class="column">
        Looking for a Suggested Task?
        <SuggestionInput />
      </div>
    )
  }
}

export default SuggestionContainer;
