import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer'
import SuggestionContainer from './containers/SuggestionContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="div-a">
          <SuggestionContainer />
        </div>
          <br />
        <div className="div-a">
          <TodosContainer />
        </div>
      </div>
    );
  }
}

export default App;
