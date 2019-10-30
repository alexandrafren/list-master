import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer'
import SuggestionContainer from './containers/SuggestionContainer'
import Header from './components/Header'
import CommentContainer from './containers/CommentContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <TodosContainer />
        </div>
      </div>
    );
  }
}

export default App;
