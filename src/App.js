import React, { Component } from 'react';

import Header from './components/header';
import Navigation from  './components/navigation';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navigation />
        <h1>Web Capstone Project</h1>
      </div>
    );
  }
}

export default App;
