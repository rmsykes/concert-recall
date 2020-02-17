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
                        <div className='headerRight' id='oneVenueHeaderPhoto'>
                            <div className='oneVenueInfo'>
                                <h1>{this.state.venue.venueName}</h1>

                                <h2>{this.state.venue.location}</h2>
                                <h2>Capacity: {this.state.venue.capacity}</h2>

                                <img src={this.state.venue.venuePhotoOne} alt="Venue Photo" />
                                <img src={this.state.venue.venuePhotoTwo} alt="Venue Photo" />

                            </div>
                        </div>
                    </div>

                    <div className='body' id='oneVenueBody'>

                    </div>


                    {/* COMMENTED OUT DELETE BUTTON SO THAT IT DOESNT BREAK MY DB */}
                    {/* <button onClick={() => this.deleteVenue()}>Delete Venue</button> */}
                </div>
        )
    }
}
