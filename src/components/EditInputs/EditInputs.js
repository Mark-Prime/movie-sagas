import React, { Component } from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';

class EditInputs extends Component {
    componentDidMount() {
        // set the state of the EditInfo component
        this.props.setStateOnRefresh(this.props.initial_title, this.props.initial_description)
    }


    render() { 
        return ( 
            <>
                <TextField
                    id="standard-name"
                    label="Title"
                    margin="normal"
                    fullWidth
                    value={this.props.title}
                    onChange={(event) => this.props.handleChange(event, 'title')}
                />
                <TextField
                    id="standard-name"
                    label="Description"
                    margin="normal"
                    fullWidth
                    multiline
                    value={this.props.description}
                    variant="outlined"
                    onChange={(event) => this.props.handleChange(event, 'description')}
                />
            </>
         );
    }
}
 
export default EditInputs;