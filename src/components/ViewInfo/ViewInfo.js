// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// CSS
import './ViewInfo.css'

// Components
import Header from '../Header/Header'

// Material-ui
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const mapReduxStateToProps = (reduxState) => ({
    genres: reduxState.genres
});

class ViewInfo extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_INFO', payload: this.props.match.params })
        window.scrollTo(0, 0)
    }

    render() { 
        return ( 
            <>
                <Header edit={true}/>
                {this.props.genres[0] &&
                    <Grid container className="view-container">
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                            <img className="poster" src={this.props.genres[0].poster} alt={this.props.genres[0].title} />
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={4}>
                            <h1>{this.props.genres[0].title}</h1>
                            <p className="description">{this.props.genres[0].description}</p>
                            <Divider />
                            {this.props.genres.map(genre => <h2 key={genre.name}>{genre.name}</h2>)}
                        </Grid>
                    </Grid>
                }
            </>
         );
    }
}
 
export default withRouter(connect(mapReduxStateToProps)(ViewInfo));