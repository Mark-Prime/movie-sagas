import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Pages
import MoviePage from '../MoviePage/MoviePage'
import ViewInfo from '../ViewInfo/ViewInfo'
import EditInfo from '../EditInfo/EditInfo'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={MoviePage} />
          <Route path='/view/:id' component={ViewInfo} />
          <Route path='/edit/:id' component={EditInfo} />
        </Router>
      </div>
    );
  }
}

export default App;
