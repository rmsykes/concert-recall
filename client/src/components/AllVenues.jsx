// Import React, { Component } and axios
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


// Create and Export AllVenues Component
export default class AllVenues extends Component {

    // AllVenues Component State
    state = {
        venueData: [],
        newVenue: {
            venueName: String,
            location: String,
            capacity: Number,
            venuePhotoOne: String,
            venuePhotoTwo: String
        },
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
    createVenue = (evt) => {
        evt.preventDefault()
        const newVenue = this.state.newVenue

        axios.post('/api/venue', newVenue)
            .then((res) => {
                this.componentDidMount()
            })
    }


    // handleInputChange() - sets state from input feild tageted in input field below
    handleInputChange = (evt) => {
        const copiedNewVenue = { ...this.state.newVenue }
        copiedNewVenue[evt.target.name] = evt.target.value;
        this.setState({ newVenue: copiedNewVenue })
    }


    // toggles seeing create concert form with create form button
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    // alerts when a venue is created
    alertVenueMade = () => {
        alert("Venue Created!");
    }

    // venue form toggled on button click
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
                        onChange={this.handleInputChange}
                        value={this.state.newVenue.venueName} />

                    <input
                        type="string"
                        name="location"
                        placeholder="Venue Location"
                        required="required"
                        onChange={this.handleInputChange}
                        value={this.state.newVenue.location} />

                    <input
                        type="number"
                        name="capacity"
                        placeholder="Venue Capacity"
                        onChange={this.handleInputChange}
                        value={this.state.newVenue.capacity} />
                    <br />
                    <br />
                    <input
                        type="string"
                        name="venuePhotoOne"
                        placeholder="Venue Photo"
                        onChange={this.handleInputChange}
                        value={this.state.newVenue.venuePhotoOne} />

                    <input
                        type="string"
                        name="venuePhotoTwo"
                        placeholder="Venue Photo"
                        onChange={this.handleInputChange}
                        value={this.state.newVenue.venuePhotoTwo} />
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
