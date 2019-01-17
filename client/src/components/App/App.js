import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from '../../views/Home/HomeContainer';
import IntroductionContainer from '../../views/Introduction/IntroductionContainer';
import ChapitresContainer from '../../views/Chapitres/ChapitresContainer';
import Propos from '../../views/APropos/Propos.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/introduction' component={IntroductionContainer} />
            <Route exact path='/chapitres' component={ChapitresContainer} />
            <Route exact path='/propos' component={Propos} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
