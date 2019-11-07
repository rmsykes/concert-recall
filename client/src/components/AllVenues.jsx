// Import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Create and Export AllVenues Component
export default class AllVenues extends Component {

    // AllVenues Component State
    state = {
        venueData: [],
        newVenueName: '',
        newVenueLcocation: '',
        newVenuecapacity: Number

    }

    // componentDidMount() to retreive /api/venue data
    componentDidMount() {
        axios.get('/api/venue')
            .then((res) => {
                this.setState({ venueData: res.data })
            })
    }

    // createVenue() - posts venueName, location, capacity from input feilds(which are set to state) to the backend /api/venue
    createVenue = () => {
        const newVenue = {
            venueName: this.state.newVenueName,
            location: this.state.newVenuelocation,
            capacity: this.state.newVenuecapacity
        }
        axios.post('/api/venue', newVenue)
            .then((res) => {
                this.componentDidMount()
            })
    }

    // onVenueNameChange() - sets the state of venueName from the input feild for venueName
    onVenueNameChange = (evt) => {
        const newVenueName = evt.target.value;
        this.setState({ newVenueName: newVenueName })
    }


    // Rendered in Browser
    render() {

        const listOfVenues = this.state.venueData.map(
            (venueData) => {
                return <div>
                    <Link to={`/venue/${venueData._id}`}>
                        {venueData.venueName}
                    </Link>
                </div>
            }
        )


        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Venues</h1>

                {listOfVenues}

                <div>
                    <h2>Create New Venue</h2>

                    <input
                        type="string"
                        name="venueName"
                        placeholder="Venue Name"
                        required="required"
                        onChange={this.onVenueNameChange}
                        value={this.state.onVenueNameChange}
                    />

                    <input
                        type="string"
                        name="venueLocation"
                        placeholder="Venue Location"
                        required="required"
                    />

                    <input
                        type="number"
                        name="venueCapacity"
                        placeholder="Venue Capacity"
                    />

                    <button onClick={() => this.createVenue()}>Create Venue</button>
                </div>
            </div>
        )
    }
}
