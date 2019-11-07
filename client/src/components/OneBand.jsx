// Import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'

// create and export OneBand Component
export default class OneBand extends Component {

    // OneBand Component State
    state = {
        band: {
            bandName: '',
            genre: ''
        }
    }

    // componentDidMount() to retreive data on this band 
    componentDidMount() {
        axios.get(`/api/band/${this.props.match.params.bandId}`)
            .then((res) => {
                this.setState({ band: res.data })
            })
    }

    // deleteBand() deletes this band in the database on when activated on click from button
    deleteBand = () => {
        axios.delete(`/api/band/${this.props.match.params.bandId}`)
        .then((res) => {
            // res.redirect('/band')
        })
    }

    
    // Rendered in Browser
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.band.bandName}</h1>
                <h2>{this.state.band.genre}</h2>

                <button onClick={() => this.deleteBand(this.props.match.params.bandId)}>Delete Band</button>
            </div>
        )
    }
}
