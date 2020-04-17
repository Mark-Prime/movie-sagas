import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';

import './MovieDisplay.css'


class MovieDisplay extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <h1>{this.props.title}</h1>
                <Divider />
            </>
         );
    }
}
 
export default MovieDisplay;