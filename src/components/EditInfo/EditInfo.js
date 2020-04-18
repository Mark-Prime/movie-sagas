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
        title: '',
        description: ''
    }

    componentDidMount() {

        this.props.dispatch({ type: 'GET_INFO', payload: this.props.match.params })
        window.scrollTo(0, 0)
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    inputFormState = () => {
        console.log('inputFormState')
        if (this.props.genres[0]) {
            this.setState({
                title: this.props.genres[0].title,
                description: this.props.genres[0].description
            })
        }
    }

    render() {
        return (
            <>
                <Header edit={false} />
                {this.props.genres[0] &&
                    <Grid container className="view-container">
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                            <img className="poster" src={this.props.genres[0].poster} alt={this.props.genres[0].title} />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4}>
                            <EditInputs title={this.props.genres[0].title} description={this.props.genres[0].description} />
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