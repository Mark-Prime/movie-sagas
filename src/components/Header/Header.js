import React, { Component } from 'react';

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Header extends Component {
    render() { 
        return ( 
            <AppBar color="default">
                <Toolbar>
                    <Button color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
         );
    }
}
 
export default Header;