import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MoviePage.css'


// Components
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import Header from '../Header/Header'


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
                <Header edit={false}/>
                <div className="container">
                    {this.props.movies.map(item => <MovieDisplay key={item.id} id={item.id} image={item.poster} title={item.title} description={item.description} />)}
                </div>
            </>
         );
    }
}
 
export default connect(mapReduxStateToProps)(MoviePage);