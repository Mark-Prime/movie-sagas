// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// CSS
import './ViewInfo.css'

// Material-ui
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


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
                {this.props.genres[0] &&
                    <Grid container className="view-container">
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                            <img className="poster" src={this.props.genres[0].poster} alt={this.props.genres[0].title} />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                            <h1>{this.props.genres[0].title}</h1>
                            <h4>{this.props.genres[0].description}</h4>
                            <Divider />
                            {this.props.genres.map(genre => <h2>{genre.name}</h2>)}
                        </Grid>
                    </Grid>
                }
            </>
         );
    }
}
 
export default withRouter(connect(mapReduxStateToProps)(ViewInfo));