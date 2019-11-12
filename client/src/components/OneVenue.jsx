// Import React, { Component }, and axios
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

// create and export OneVenue Component
export default class OneVenue extends Component {

    // OneVenue Component State
    state = {
        venue: {
            venueName: '',
            location: '',
            capacity: Number,
            venuePhotoOne: '',
            venuePhotoTwo: ''
        },
        isRedirect: false
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
                this.setState({ isRedirect: true })
            })
    }

    // Rendered in Browser
    render() {
        return (

            this.state.isRedirect ? <Redirect to='/venue' /> :

                <div>

                    <nav>
                        <Link to='/'><h3>Home</h3></Link>
                        <Link to='/concert'><h3>Concerts</h3></Link>
                        <Link to='/band'><h3>Bands</h3></Link>
                        <Link to='/venue'><h3>Venues</h3></Link>
                    </nav>

                    <h1>{this.state.venue.venueName}</h1>
                    <h2>{this.state.venue.location}</h2>
                    <h2>Capacity: {this.state.venue.capacity}</h2>
                    <br/>

                    <img src={this.state.venue.venuePhotoOne} alt="Venue Photo"/>
                    <br/>

                    <img src={this.state.venue.venuePhotoTwo} alt="Venue Photo"/>
                    <br/>

                    <button onClick={() => this.deleteVenue()}>Delete Venue</button>
                </div>
        )
    }
}
