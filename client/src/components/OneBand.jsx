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
                        <h1 className='title' className='titleNotHomePage'>Concert Recall <br /> Bands</h1>
                        <nav>
                            <Link to='/'><button>Home</button></Link>
                            <Link to='/concert'><button>My Shows</button></Link>
                            <Link to='/band'><button>Bands</button></Link>
                            <Link to='/venue'><button>Venues</button></Link>
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

                    <div className='oneBandInfo'>
                        <div className='oneBandTitle'>
                            <h1>{this.state.band.bandName}</h1>
                        </div>

                        <div>
                            <img src={this.state.band.bandPhoto} alt="Band Photo" />

                        </div>

                        <h2>{this.state.band.genre}</h2>
                    </div>

                    <div className='oneBandVideosList'>
                        <h2>Featured Shows and Videos</h2>
                        <div className='videos'>
                            <ReactPlayer
                                url={this.state.band.concertVideoOne}
                            />
                        </div>

                        <div className='videos'>
                            <ReactPlayer
                                url={this.state.band.concertVideoTwo}
                            />
                        </div>

                        <div className='videos'>
                            <ReactPlayer
                                url={this.state.band.concertVideoThree}
                            />
                        </div>
                    </div>




                    {/* COMMENTED OUT DELETE BUTTON SO THAT IT DOESNT BREAK MY DB */}
                    {/* <button onClick={() => this.deleteBand()}>Delete Band</button> */}
                </div>
        )
    }
}
