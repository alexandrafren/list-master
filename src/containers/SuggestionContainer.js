import React, { Component } from 'react'
import { connect } from 'react-redux'
import SuggestionInput from '../components/SuggestionInput'
import Suggestion from '../components/Suggestion'

class SuggestionsContainer extends Component {

  //include logic to find a suggestion here

  render() {
    return(
      <div>
        <SuggestionInput />
        //render the suggestion, initial should be to add a todo
      </div>
    )
  }
}

export default SuggestionContainer;
