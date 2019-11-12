// Import React, { Component }, Axios, and { Link }
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Create and Export AllConcerts Component
export default class AllConcerts extends Component {

    // AllConcerts Component State
    state = {
        concertData: [],
        newConcert: {
            concertName: '',
            date: '',
            description: '',
            bandId: '',
            venueId: '',
            myConcertVideoOne: '',
            myConcertVideoTwo: '',
            myConcertVideoThree: ''
        },
        bandData: [],
        venueData: []
    }

    // componentDidMount() - retreives /api/concert data & runs getBandData() to get /api/band data
    componentDidMount() {
        axios.get('/api/concert')
            .then((res) => {
                this.setState({ concertData: res.data })
            })
        this.getBandData()
        this.getVenueData()
    }

    // getBandData() - retreives /api/band data
    getBandData = () => {
        axios.get('/api/band')
            .then((res) => {
                this.setState({ bandData: res.data })
            })
    }

    // getVenueData() - retreives /api/venue data
    getVenueData = () => {
        axios.get('/api/venue')
            .then((res) => {
                this.setState({ venueData: res.data })
            })
    }

    // createConcert() - posts concertName, date, description from input feilds(which are set to state) to the backend /api/concert
    createConcert = (evt) => {
        evt.preventDefault()
        const newConcert = this.state.newConcert

        axios.post(`/api/concert`, newConcert)
            .then((res) => {
                this.componentDidMount()
            })
    }

    // onConcertNameChange() - sets the state of newConcertName from the input feild for Concert Name when called on a change contiuousely
    handleInputChange = (evt) => {
        const copiedNewConcert = { ...this.state.newConcert }
        copiedNewConcert[evt.target.name] = evt.target.value;
        this.setState({ newConcert: copiedNewConcert })
    }


    // Rendered in Browser
    render() {


        const listOfConcerts = this.state.concertData.map(
            (concertData) => {
                return <div>
                    <Link to={`/concert/${concertData._id}`}>
                        <div className="link">
                            <h2>{concertData.concertName}</h2>
                        </div>
                    </Link>

                </div>
            }
        )

        return (
            <div>

                <nav>
                    <Link to='/'><h3>Home</h3></Link>
                    <Link to='/concert'><h3>Concerts</h3></Link>
                    <Link to='/band'><h3>Bands</h3></Link>
                    <Link to='/venue'><h3>Venues</h3></Link>
                </nav>

                <div className='page-body'>

                    <div>
                        <div className='title'>
                            <h1>Concerts</h1>
                        </div>

                        {listOfConcerts}

                    </div>


                    <div className='createForm'>
                        <form id='userform' onSubmit={this.createConcert}>
                            <h2>Create Concert</h2>
                            <input
                                type="string"
                                name="concertName"
                                placeholder="Concert Name"
                                required="required"
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.newConcertName}
                            />

                            <input
                                type="string"
                                name="date"
                                placeholder="Concert Date"
                                required="required"
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.newConcertDate}
                            />




                            <select
                                name="bandId"
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.bandId}
                            >
                                {this.state.bandData.map(
                                    (band) => {
                                        return <option value={band._id}>{band.bandName}</option>
                                    }
                                )}
                            </select>

                            <select
                                name="venueId"
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.venueId}
                            >
                                {this.state.venueData.map(
                                    (venue) => {
                                        return <option value={venue._id}>{venue.venueName}</option>
                                    }
                                )}
                            </select>

                            <br />
                            <br />
                            <input
                                type="string"
                                name="myConcertVideoOne"
                                placeholder="My Concert Video URL"
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.newConcertDate}
                            />

                            <input
                                type="string"
                                name="myConcertVideoTwo"
                                placeholder="My Concert Video URL"
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.newConcertDate}
                            />

                            <input
                                type="string"
                                name="myConcertVideoThree"
                                placeholder="My Concert Video URL"
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.newConcertDate}
                            />

                            <br />
                            <br />

                            <textarea
                                type="string"
                                name="description"
                                placeholder="Concert Description: setlist or other information"
                                cols="98"
                                rows='5'
                                form='userform'
                                onChange={this.handleInputChange}
                                value={this.state.newConcert.newConcertDescription}
                            />

                            <br />
                            <br />

                            <input type="submit" value="Create Concert" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
