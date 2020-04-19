// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// CSS
import './EditInfo.css'

// Components
import Header from '../Header/Header'
import EditInputs from '../EditInputs/EditInputs'


// Material-ui
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const mapReduxStateToProps = (reduxState) => ({
    genres: reduxState.genres
});

class EditInfo extends Component {
    state = {
        id: '',
        title: '',
        description: '',
    }

    componentDidMount() {
        // Get the info from the server to properly load it in
        this.props.dispatch({ type: 'GET_INFO', payload: this.props.match.params })
    }

    updateInfo = () => {
        // Update the info on the database
        let payload = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description
        }
        this.props.dispatch({ type: 'UPDATE_INFO', payload})
        
    }

    setStateOnRefresh = (title, description) => {
        // Sets the state of the text when it loads
        this.setState({
            id: this.props.genres[0].id, 
            title, 
            description
        })
    }

    handleChange = (event, item) => {
        // handles change when a text box is editted
        this.setState({
            [item]: event.target.value
        })
    }

    render() {
        return (
            <>
                <Header save={true} updateInfo={this.updateInfo}/>
                {this.props.genres[0] &&
                    <Grid container className="view-container">
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                            <img className="poster" src={this.props.genres[0].poster} alt={this.props.genres[0].title} />
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={4}>
                            <EditInputs 
                                handleChange={this.handleChange}
                                updateInfo={this.updateInfo} 
                                setStateOnRefresh={this.setStateOnRefresh}
                                initial_title={this.props.genres[0].title}
                                initial_description={this.props.genres[0].description}
                                title={this.state.title}
                                description={this.state.description}
                                id={this.props.genres[0].id}
                            />
                            <Divider />
                            {this.props.genres.map(genre => <h2 key={genre.name}>{genre.name}</h2>)}
                        </Grid>
                    </Grid>
                }
            </>
        );
    }
}

export default withRouter(connect(mapReduxStateToProps)(EditInfo));