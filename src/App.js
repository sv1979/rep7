import React, { Component } from 'react';
import './App.scss';
import Activelist from './components/Activelist';
import Editor from './components/Editor';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      todos: []
    };
  }

  render() {
    return (
      <div className="App">
        <Activelist todos={this.state.todos} date={this.state.date} />
        <Editor />
      </div>
    );
  }
}

export default App;
