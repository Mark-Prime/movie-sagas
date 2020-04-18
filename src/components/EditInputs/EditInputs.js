import React, { Component } from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';

class EditInputs extends Component {

    state = { 
        title: this.props.title,
        description: this.props.description
    }

    handleChange = (event, item) => {
        this.setState({
            [item]: event.target.value
        })
    }


    render() { 
        return ( 
            <>
                <TextField
                    id="standard-name"
                    label="Title"
                    margin="normal"
                    fullWidth
                    value={this.state.title}
                    onChange={(event) => this.handleChange(event, 'title')}
                />
                <TextField
                    id="standard-name"
                    label="Description"
                    margin="normal"
                    fullWidth
                    multiline
                    value={this.state.description}
                    variant="outlined"
                    onChange={(event) => this.handleChange(event, 'description')}
                />
            </>
         );
    }
}
 
export default EditInputs;