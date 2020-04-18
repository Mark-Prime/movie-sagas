// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Header from '../Header/Header'


// Material-ui


const mapReduxStateToProps = (reduxState) => ({
    genres: reduxState.genres
});

class ViewInfo extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_INFO', payload: this.props.match.params })
    }

    render() { 
        return ( 
            <>
                <Header />
                {JSON.stringify(this.props.genres)}
            </>
         );
    }
}
 
export default withRouter(connect(mapReduxStateToProps)(ViewInfo));