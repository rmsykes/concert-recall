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
        newVenuePhotoTwo: '',
        isHidden: true,
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

    // toggles seeing create concert form with create form button
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    alertVenueMade = () => {
        alert("Venue Created!");
    }

    venueForm = () => {
        return (
            <div className='createForm'>
                <form onSubmit={this.createVenue}>
                    <h2>Create Venue</h2>

                    <input
                        type="string"
                        name="venueName"
                        placeholder="Venue Name"
                        required="required"
                        onChange={this.onVenueNameChange}
                        value={this.state.onVenueNameChange} />

                    <input
                        type="string"
                        name="venueLocation"
                        placeholder="Venue Location"
                        required="required"
                        onChange={this.onVenueLocationChange}
                        value={this.state.onVenueLocationChange} />

                    <input
                        type="number"
                        name="venueCapacity"
                        placeholder="Venue Capacity"
                        onChange={this.onVenueCapacityChange}
                        value={this.state.onVenueCapacityChange} />
                    <br />
                    <br />
                    <input
                        type="string"
                        name="newVenuePhotoOne"
                        placeholder="Venue Photo"
                        onChange={this.onVenuePhotoOneChange}
                        value={this.state.onVenuePhotoOneChange} />

                    <input
                        type="string"
                        name="newVenuePhotoTwo"
                        placeholder="Venue Photo"
                        onChange={this.onVenuePhotoTwoChange}
                        value={this.state.onVenuePhotoTwoChange} />
                    <br />
                    <br />
                    <input className='submitFormButton' onClick={this.alertVenueMade} type='submit' value="Create Venue"></input>

                </form>
            </div>
        )
    }


    // Rendered in Browser
    render() {

        const listOfVenues = this.state.venueData.map(
            (venueData) => {
                return <div className='oneVenueFromListOfVenues'>
                    <Link to={`/venue/${venueData._id}`}>
                        <p>
                            <div>
                                <h2>{venueData.venueName}</h2>
                                <h3>{venueData.location}</h3>
                                <div className='oneVenuePhotoFromListOfVenues'>
                                    <img src={venueData.venuePhotoOne} alt="venue photo" />
                                </div>
                            </div>
                        </p>
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

                <div className='header'>
                    <div className='headerLeft'>
                        {/* blank black space left of header */}
                    </div>
                    <div className='headerRight' id='allVenuesHeaderPhoto'>
                        <h1>My Venues</h1>
                    </div>
                </div>


                <div className='body'>
                    <div className='allVenuesSectionContainer'>
                        <h1 className='bodySectionTitle'>Venues</h1>

                        <div className='listOfVenuesContainer'>
                            {listOfVenues}
                        </div>
                    </div>

                    <div className='createFormArea'>
                        <h1 className='bodySectionTitle'>Create New Band</h1>
                        <div>
                            {/* button that toggles the create pretzel form. */}
                            <button className='createNewFormButton' onClick={this.toggleHidden}>New Venue Form</button>
                        </div>
                        {this.state.isHidden === false ? this.venueForm() : null}
                    </div>
                </div>
            </div>
        )
    }
}
