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
                                    <div>My Shows</div>
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
                                <img src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt="concert photo" />
                            </div>
                        </div>
                    </div>

                    <div className='oneVenueInfo'>
                        <div className='oneVenueInfoTop'>
                            <div className='oneVenueTitle'>
                                <h1>{this.state.venue.venueName}</h1>
                            </div>

                            <h2>{this.state.venue.location}</h2>
                            <h2>Capacity: {this.state.venue.capacity}</h2>
                        </div>

                        <div className='oneVenueInfoBottom'>
                            <img src={this.state.venue.venuePhotoOne} alt="Venue Photo" />

                            <img src={this.state.venue.venuePhotoTwo} alt="Venue Photo" />
                        </div>


                    </div>



                    {/* COMMENTED OUT DELETE BUTTON SO THAT IT DOESNT BREAK MY DB */}
                    {/* <button onClick={() => this.deleteVenue()}>Delete Venue</button> */}
                </div>
        )
    }
}
