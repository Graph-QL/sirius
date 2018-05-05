import React, { Component } from 'react';
import './App.css';

import TodoForm from '../TodoForm/TodoForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Doooo</h1>
        </header>

        <TodoForm />
      </div>
    );
  }
}

export default App;
