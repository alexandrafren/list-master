import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer'
import SuggestionContainer from './containers/SuggestionContainer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="head">
          <Header />
        </div>
        <div>
          <SuggestionContainer />
        </div>
          <br />
        <div>
          <TodosContainer />
        </div>
      </div>
    );
  }
}

export default App;
