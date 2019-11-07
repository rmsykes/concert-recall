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

    // componentDidMount() - retreives /api/venue data
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
            location: this.state.newVenueLocation,
            capacity: this.state.newVenueCapacity
        }
        axios.post('/api/venue', newVenue)
            .then((res) => {
                this.componentDidMount()
            })
    }

    // onVenueNameChange() - sets the state of newVenueName from the input feild for Venue Name on the page
    onVenueNameChange = (evt) => {
        const newVenueName = evt.target.value;
        this.setState({ newVenueName: newVenueName })
    }

    // onVenueLocationChange() - sets the state of newVenueLocation from the input feild for Venue Location on the page
    onVenueLocationChange = (evt) => {
        const newVenueLocation = evt.target.value;
        this.setState({ newVenueLocation: newVenueLocation })
    }

    // onVenueCapacityChange() - sets the state of newVenueCapacity
    onVenueCapacityChange = (evt) => {
        const newVenueCapacity = evt.target.value;
        this.setState({ newVenueCapacity: newVenueCapacity})
    }

    // Rendered in Browser
    render() {

        const listOfVenues = this.state.venueData.map(
            (venueData) => {
                return <div>
                    <Link to={`/venue/${venueData._id}`}>
                        <div className='link'>
                            {venueData.venueName}
                        </div>
                    </Link>
                </div>
            }
        )


        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Venues</h1>

                {listOfVenues}

                <div className='createForm'>
                    <h2>Create Venue</h2>

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
                        onChange={this.onVenueLocationChange}
                        value={this.state.onVenueLocationChange}
                    />

                    <input
                        type="number"
                        name="venueCapacity"
                        placeholder="Venue Capacity"
                        onChange={this.onVenueCapacityChange}
                        value={this.state.onVenueCapacityChange}
                    />

                    <button onClick={() => this.createVenue()}>Create Venue</button>
                </div>
            </div>
        )
    }
}
