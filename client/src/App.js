import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import SuggestionContainer from './containers/SuggestionContainer'

class App extends Component {
  render() {
    return (
      <div className="App" class="row">
          <TodosContainer />
          <br/>
          <ProjectsContainer />
          <br/>
          <SuggestionContainer />
      </div>
    );
  }
}

export default App;
