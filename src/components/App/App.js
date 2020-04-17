import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

//Components
import MoviePage from '../MoviePage/MoviePage'
import Header from '../Header/Header'



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Route exact path='/' component={MoviePage} />
        </Router>
      </div>
    );
  }
}

export default App;
