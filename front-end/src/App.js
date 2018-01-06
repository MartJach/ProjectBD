import React, { Component } from 'react';
import './App.css';
import {Login} from './Login_panel.jsx';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
          
          <Login/>
        
      </div>
    );
  }
}

export default App;
