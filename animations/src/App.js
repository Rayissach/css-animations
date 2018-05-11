import React, { Component } from 'react';
import Shapes from './components/Shapes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='shape-app'>
        <Shapes />
      </div>
    );
  }
}

export default App;
