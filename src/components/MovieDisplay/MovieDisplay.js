import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import './MovieDisplay.css'


class MovieDisplay extends Component {

    openViewInfo = () => {
        this.props.history.push(`/view/${this.props.id}`);
    }


    render() { 
        return ( 
            <>
                <Divider />
                <Grid container className="container-inner">
                    <Grid item xs={4}>
                        <img className="image" src={this.props.image} onClick={this.openViewInfo} alt={this.props.title}/>
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
 
export default withRouter(connect()(MovieDisplay));