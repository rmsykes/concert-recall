// Import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

// create and export OneBand Component
export default class OneBand extends Component {

    // OneBand Component State
    state = {
        band: {
            bandName: '',
            genre: '',
            concertVideoOne: '',
            concertVideoTwo: '',
            concertVideoThree: '',
            bandPhoto: ''
        },
        isRedirect: false
    }

    // componentDidMount() to retreive data on this band 
    componentDidMount() {
        axios.get(`/api/band/${this.props.match.params.bandId}`)
            .then((res) => {
                this.setState({ band: res.data })
            })
    }

    // deleteBand() deletes this band in the database on when activated on click from button
    deleteBand = () => {
        axios.delete(`/api/band/${this.props.match.params.bandId}`)
            .then((res) => {
                this.setState({ isRedirect: true })
            })
    }


    // Rendered in Browser
    render() {
        return (

            this.state.isRedirect ? <Redirect to='/band' /> :

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
                        <div className='headerRight' id='oneBandheaderPhoto'>
                            <div className='oneBandInfo'>
                                <h1>{this.state.band.bandName}</h1>

                                <img src={this.state.band.bandPhoto} alt="Band Photo" />

                                <h2>{this.state.band.genre}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='body'>
                        <div className='oneBandVideosSection'>
                            <h1 className='bodySectionTitle' id='featuredShowsAndVideosTitle'>Featured Shows and Videos</h1>
                            <div className='videosListContainer'>

                                <div className='videos'>
                                    <ReactPlayer url={this.state.band.concertVideoOne} />
                                </div>

                                <div className='videos'>
                                    <ReactPlayer url={this.state.band.concertVideoTwo} />
                                </div>

                                <div className='videos'>
                                    <ReactPlayer url={this.state.band.concertVideoThree} />
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* COMMENTED OUT DELETE BUTTON SO THAT IT DOESNT BREAK MY DB */}
                    {/* <button onClick={() => this.deleteBand()}>Delete Band</button> */}
                </div>
        )
    }
}
