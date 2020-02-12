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
        newVenueLocation: '',
        newVenuecapacity: Number,
        newVenuePhotoOne: '',
        newVenuePhotoTwo: ''
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
            capacity: this.state.newVenueCapacity,
            venuePhotoOne: this.state.newVenuePhotoOne,
            venuePhotoTwo: this.state.newVenuePhotoTwo
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
        this.setState({ newVenueCapacity: newVenueCapacity })
    }

    onVenuePhotoOneChange = (evt) => {
        const newVenuePhotoOne = evt.target.value;
        this.setState({ newVenuePhotoOne: newVenuePhotoOne })
    }

    onVenuePhotoTwoChange = (evt) => {
        const newVenuePhotoTwo = evt.target.value;
        this.setState({ newVenuePhotoTwo: newVenuePhotoTwo })
    }

    // Rendered in Browser
    render() {

        const listOfVenues = this.state.venueData.map(
            (venueData) => {
                return <div className='venueListName'>
                    <Link to={`/venue/${venueData._id}`}>
                        <div>
                            <h2>{venueData.venueName}</h2>
                            <p>{venueData.location}</p>
                            <img className='venueListImage' src={venueData.venuePhotoOne} alt="venue photo"/>
                        </div>
                    </Link>
                </div>
            }
        )


        return (
            <div>
                <div className='navBar'>
                    <h2 className='navPageTitle'>Concert Recall</h2>
                    <nav>
                        <Link to='/'>
                            <div class="navButton">
                                <div>Home</div>
                            </div>
                        </Link>

                        <Link to='/concert'>
                            <div class="navButton">
                                <div>Concerts</div>
                            </div>
                        </Link>

                        <Link to='/band'>
                            <div class="navButton">
                                <div>Bands</div>
                            </div>
                        </Link>

                        <Link to='/venue'>
                            <div class="navButton">
                                <div>Venues</div>
                            </div>
                        </Link>
                    </nav>
                </div>

                <div className='homeHeader'>
                    <div className='homeHeaderLeft'>
                    </div>

                    <div className='homeHeaderRight'>

                        <div className='homeHeaderPhoto'>
                            <img src="https://images.unsplash.com/photo-1561114601-81d07393ee3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80" alt="concert photo" />
                        </div>
                    </div>

                </div>
                <div className='headerDescription'>
                    <h2>Info On Your Favorite Venues</h2>
                </div>

                <div className='pageBody'>
                    <div className='bodyTitle'>
                        <h1>Venues</h1>
                    </div>
                </div>

                <div className='listOfVenuesContainer'>
                    {listOfVenues}
                </div>


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

                    <input
                        type="string"
                        name="newVenuePhotoOne"
                        placeholder="Venue Photo"
                        onChange={this.onVenuePhotoOneChange}
                        value={this.state.onVenuePhotoOneChange}
                    />

                    <input
                        type="string"
                        name="newVenuePhotoTwo"
                        placeholder="Venue Photo"
                        onChange={this.onVenuePhotoTwoChange}
                        value={this.state.onVenuePhotoTwoChange}
                    />

                    <button onClick={() => this.createVenue()}>Create Venue</button>
                </div>
            </div>
        )
    }
}
