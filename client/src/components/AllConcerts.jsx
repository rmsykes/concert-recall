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
        venueData: [],
        isHidden: true,
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

    // handleInputChange() - sets state from input feild tageted in input field below
    handleInputChange = (evt) => {
        const copiedNewConcert = { ...this.state.newConcert }
        copiedNewConcert[evt.target.name] = evt.target.value;
        this.setState({ newConcert: copiedNewConcert })
    }


    // toggles seeing create concert form with create form button
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    concertForm = () => {
        return (
            <div className='createForm'>
                <form onSubmit={this.createConcert}>
                    <h2>Create Concert</h2>
                    <input
                        type="string"
                        name="concertName"
                        placeholder="Concert Name"
                        required="required"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.newConcertName} />

                    <input
                        type="string"
                        name="date"
                        placeholder="Concert Date"
                        required="required"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.newConcertDate} />

                    <select
                        name="bandId"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.bandId}>
                        {this.state.bandData.map(
                            (band) => {
                                return <option value={band._id}>{band.bandName}</option>
                            }
                        )}
                    </select>

                    <select
                        name="venueId"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.venueId}>
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
                        value={this.state.newConcert.newConcertDate} />
                    <input
                        type="string"
                        name="myConcertVideoTwo"
                        placeholder="My Concert Video URL"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.newConcertDate} />

                    <input
                        type="string"
                        name="myConcertVideoThree"
                        placeholder="My Concert Video URL"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.newConcertDate} />
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
                        value={this.state.newConcert.newConcertDescription} />

                    <br />
                    <br />

                    <input className='submitFormButton' onClick={this.alertConcertMade} type="submit" value="Create Concert" />
                </form>
            </div>
        )
    }

    alertConcertMade = () => {
        alert("Concert Created!");
    }


    // Rendered in Browser
    render() {

        const listOfConcerts = this.state.concertData.map(
            (concertData) => {
                return <div className='myConcertListItemWidthAndSpacing'>
                    <Link to={`/concert/${concertData._id}`}>
                        <div className='myConcertListItemDescriptionAndLink'>
                            <h2>{concertData.concertName}</h2>
                            <h2>{concertData.date}</h2>

                        </div>
                    </Link>
                </div>
            })

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
                    <div className='headerRight' id='allConcertsHeaderPhoto'>
                        <h1>My Past Live Shows</h1>
                    </div>
                </div>


                <div className='body'>
                    <div class='myShowsArea'>
                        <h1 className='bodySectionTitle' id='myShowsSectionTitle'>My Concerts</h1>
                        <div className='myFullConcertList'>
                            {listOfConcerts}
                        </div>
                    </div>


                    <div className='createFormArea'>
                        <h1 className='bodySectionTitle'>Create New Concert</h1>
                        <div>
                            {/* button that toggles the create pretzel form. */}
                            <button className='createNewFormButton' onClick={this.toggleHidden}>New Concert Form</button>
                        </div>
                        {this.state.isHidden === false ? this.concertForm() : null}
                    </div>

                </div>
            </div>
        )
    }
}