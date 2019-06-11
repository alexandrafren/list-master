import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer'
import SuggestionContainer from './containers/SuggestionContainer'

class App extends Component {
  render() {
    return (
      <div className="App" class="row">
          <TodosContainer />
          <br/>
          <SuggestionContainer />
      </div>
    );
  }
}

export default App;
