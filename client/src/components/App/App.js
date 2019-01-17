import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from '../../views/Home/HomeContainer';
import ChapitreContainer from '../../views/Chapitre/ChapitreContainer';
import Propos from '../../views/APropos/Propos.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/article' component={ChapitreContainer} />
            <Route exact path='/propos' component={Propos} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
