import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MoviePage.css'


// Components
import MovieDisplay from '../MovieDisplay/MovieDisplay';


const mapReduxStateToProps = (reduxState) => ({
    movies: reduxState.movies
});

class MoviePage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES'} )
        
    }

    render() { 
        return ( 
            <>
                <p>Movie Page</p>
                <div className="container">
                    {this.props.movies.map(item => <MovieDisplay title={item.title} />)}
                </div>
            </>
         );
    }
}
 
export default connect(mapReduxStateToProps)(MoviePage);