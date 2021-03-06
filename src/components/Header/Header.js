import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Header extends Component {
    render() { 
        return ( 
            <AppBar color="default">
                <Toolbar>
                    <Button color="primary" href="#">Home</Button>
                    {this.props.edit &&
                        <Button color="secondary" href={'#' + this.props.location.pathname.replace('view', 'edit')}>Edit</Button>
                    }
                    {this.props.save &&
                        <Button color="secondary" 
                        href={'#' + this.props.location.pathname.replace('edit', 'view')}
                        onClick={this.props.updateInfo}
                        >Save</Button>
                    }
                </Toolbar>
            </AppBar>
         );
    }
}
 
export default withRouter(Header);