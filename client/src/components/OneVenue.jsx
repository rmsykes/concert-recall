// Import React, { Component }, and axios
import React, { Component } from 'react'
import axios from 'axios'

// create and export OneVenue Component
export default class OneVenue extends Component {

    // OneVenue Component State
    state = {
        venue: {
            venueName: '',
            location: '',
            capacity: Number
        }
    }

    // componentDidMount() - retrieves data on this venue
    componentDidMount() {
        axios.get(`/api/venue/${this.props.match.params.venueId}`)
            .then((res) => {
                this.setState({ venue: res.data })
            })
    }

    // deleteVenue() - deletes this venue in the db when activated on click of button
    deleteVenue = () => {
        axios.delete(`/api/venue/${this.props.match.params.venueId}`)
            .then((res) => {
                // res.redirect('/venue')
            })
    }

    // Rendered in Browser
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.venue.venueName}</h1>
                <h2>{this.state.venue.location}</h2>
                <h2>Capacity: {this.state.venue.capacity}</h2>

                <button onClick={() => this.deleteVenue()}>Delete Venue</button>
            </div>
        )
    }
}
