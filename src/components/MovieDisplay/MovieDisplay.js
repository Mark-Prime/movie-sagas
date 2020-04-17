import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import './MovieDisplay.css'


class MovieDisplay extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Divider />
                <Grid container className="container-inner">
                    <Grid item xs={4}>
                        <img className="image" src={this.props.image}/>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </Grid>
                </Grid>
            </>
         );
    }
}
 
export default MovieDisplay;