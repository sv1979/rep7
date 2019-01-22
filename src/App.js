import React, { Component } from 'react';
import './App.scss';
import Activelist from './components/Activelist';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Activelist/>
      </div>
    );
  }
}

export default App;
