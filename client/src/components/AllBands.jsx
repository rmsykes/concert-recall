// Step 1 import React, { Component }, axios, and { Link }

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


// Create and Export AllBands Component
export default class AllBands extends Component {

    // AllBands Component State
    state = {
        listOfBands: [],
        newBandName: '',
        newBandGenre: '',
        newConcertVideoOne: '',
        newConcertVideoTwo: '',
        newConcertVideoThree: '',
        newBandPhoto: ''
    }

    // componentDidMount() to retreive /api/band data
    componentDidMount() {
        axios.get('/api/band')
            .then((res) => {
                this.setState({ listOfBands: res.data })
            })
    }


    // createBand() - posts band & genre from input feilds (which are set to state) to the backend /api/band
    createBand() {
        const newBand = {
            bandName: this.state.newBandName,
            genre: this.state.newBandGenre,
            concertVideoOne: this.state.newConcertVideoOne,
            concertVideoTwo: this.state.newConcertVideoTwo,
            concertVideoThree: this.state.newConcertVideoThree,
            bandPhoto: this.state.newBandPhoto
        }
        axios.post('/api/band', newBand)
            .then((res) => {
                this.componentDidMount()
            })
    }

    // onBandNameChange() - sets the state of newBandName from the input feild for newBandName
    onBandNameChange = (evt) => {
        const newBandName = evt.target.value;
        this.setState({ newBandName: newBandName })
    }

    // onBandGenreChange() - sets the state of the newGenreName from input feild for newBandGenre
    onBandGenreChange = (evt) => {
        const newBandGenre = evt.target.value;
        this.setState({ newBandGenre: newBandGenre })
    }


    onNewConcertVideoOneChange = (evt) => {
        const newConcertVideoOne = evt.target.value;
        this.setState({ newConcertVideoOne: newConcertVideoOne })
    }


    onNewConcertVideoTwoChange = (evt) => {
        const newConcertVideoTwo = evt.target.value;
        this.setState({ newConcertVideoTwo: newConcertVideoTwo })
    }

    onNewConcertVideoThreeChange = (evt) => {
        const newConcertVideoThree = evt.target.value;
        this.setState({ newConcertVideoThree: newConcertVideoThree })
    }

    onNewBandPhotoChange = (evt) => {
        const newBandPhoto = evt.target.value;
        this.setState({ newBandPhoto: newBandPhoto })
    }

    // Rendered in Browser
    render() {

        const listOfBands = this.state.listOfBands.map(
            (band) => {
                return <div>
                    <Link to={`/band/${band._id}`}>
                        <div className='link'>
                            <h2>{band.bandName}</h2>
                            <div className='band-photo'>
                                <img src={band.bandPhoto} alt="band photo" />
                            </div>
                        </div>
                    </Link>
                </div>
            })


        return (
            <div>
                <div className='navBar'>
                    <h2 className='pageTitle'>Concert Recall</h2>
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
                            <img src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80" alt="concert photo" />
                        </div>
                    </div>

                </div>
                <div className='headerDescription'>
                    <h2>Live Shows By Your Favorite Bands.</h2>
                </div>




                <div className='pageBody'>
                    <div className='bodyTitle'>
                        <h1>Bands</h1>
                    </div>
                </div>

                <div className='listOfBandsContainer'>
                    {listOfBands}
                </div>


                <div className='createForm'>
                    <h2>Create Band</h2>

                    <input
                        type="string"
                        name="newBandName"
                        placeholder="Band Name"
                        required="required"
                        onChange={this.onBandNameChange}
                        value={this.state.onBandNameChange}
                    />

                    <input
                        type="string"
                        name="newBandGenre"
                        placeholder="Genre"
                        required="required"
                        onChange={this.onBandGenreChange}
                        value={this.state.onBandGenreChange} />

                    <input
                        type="string"
                        name="newBandPhoto"
                        placeholder="Band Photo"
                        onChange={this.onNewBandPhotoChange}
                        value={this.state.onNewBandPhotoChange} />

                    <input
                        type='string'
                        name='newConcertVideoOne'
                        placeholder='Video One'
                        onChange={this.onNewConcertVideoOneChange}
                        value={this.state.onNewConcertVideoOneChange}
                    />


                    <input
                        type='string'
                        name='newConcertVideoTwo'
                        placeholder='Video Two'
                        onChange={this.onNewConcertVideoTwoChange}
                        value={this.state.onNewConcertVideoTwoChange}
                    />

                    <input
                        type='string'
                        name='newConcertVideoThree'
                        placeholder='Video Three'
                        onChange={this.onNewConcertVideoThreeChange}
                        value={this.state.onNewConcertVideoThreeChange}
                    />

                    <button onClick={() => this.createBand()}>Create Band</button>
                </div>

            </div>
        )
    }
}
