// Import React, { Component }, Axios, Link
import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import ReactPlayer from 'react-player'


// Create and Export OneConcert Component
export default class OneConcert extends Component {

    // OneConcert Component State
    state = {
        concert: {
            concertName: '',
            date: '',
            description: '',
            bandId: '',
            venueId: '',
            myConcertVideoOne: '',
            myConcertVideoTwo: '',
            myConcertVideoThree: ''
        },
        band: {},
        venue: {},
        isRedirect: false
    }

    // componentDidMount() - retreives data on this concert & band data
    componentDidMount() {
        axios.get(`/api/concert/${this.props.match.params.concertId}`)
            .then((res) => {
                this.setState({ concert: res.data })
            })
            .then(() => {
                this.getOneBand()
            })
            .then(() => {
                this.getOneVenue()
            })
    }


    getOneBand = () => {
        axios.get(`/api/band/${this.state.concert.bandId}`)
            .then((res) => {
                this.setState({ band: res.data })
            })
    }

    getOneVenue = () => {
        axios.get(`/api/venue/${this.state.concert.venueId}`)
            .then((res) => {
                this.setState({ venue: res.data })
            })
    }

    // deleteConcert() - deletes concert by concertId from db api/concert
    deleteConcert = () => {
        axios.delete(`/api/concert/${this.props.match.params.concertId}`)
            .then((res) => {
                this.setState({ isRedirect: true })
            })
    }

    // Rendered in Browser
    render() {
        const bandName = this.state.band.bandName
        const venueName = this.state.venue.venueName
        return (

            this.state.isRedirect ? <Redirect to="/concert" /> :

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
                        <div className='headerRight' id='oneConcertHeaderPhoto'>
                            <div className='oneConcertInfo'>
                                    <h1>{this.state.concert.concertName}</h1>

                                <Link to={`/band/${this.state.concert.bandId}`}><h2>{bandName}</h2></Link>
                                <Link to={`/venue/${this.state.concert.venueId}`}><h2>{venueName}</h2></Link>

                                <br />
                                <h3>{this.state.concert.date}</h3>

                                <br />
                                <h2>Show Description:</h2>
                                <h3>{this.state.concert.description}</h3>

                            </div>
                        </div>
                    </div>

                    <div className='body'>
                        <div className='myConcertVideosSection'>
                            <h1 className='bodySectionTitle'>Videos from the Show:</h1>
                            <div className='videosListContainer'>
                                <div className='videos'>
                                    <ReactPlayer url={this.state.concert.myConcertVideoOne} />
                                </div>

                                <div className='videos'>
                                    <ReactPlayer url={this.state.concert.myConcertVideoTwo} />
                                </div>

                                <div className='videos'>
                                    <ReactPlayer url={this.state.concert.myConcertVideoThree} />
                                </div>
                            </div>

                        </div>
                        <button class='deleteButton' onClick={() => this.deleteConcert()}>Delete This Concert</button>
                    </div>

                </div>
        )
    }
}
