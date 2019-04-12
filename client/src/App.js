import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import SuggestionContainer from './containers/SuggestionContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodosContainer />
          <br/>
          <ProjectsContainer />
          <br/>
          <SuggestionContainer />
        </header>
      </div>
    );
  }
}

export default App;
