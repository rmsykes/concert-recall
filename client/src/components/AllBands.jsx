// Step 1 import React, { Component }, axios, and { Link }

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


// Create and Export AllBands Component
export default class AllBands extends Component {

    // AllBands Component State
    state = {
        listOfBands: [],
        newBand: {
            bandName: '',
            genre: '',
            concertVideoOne: '',
            concertVideoTwo: '',
            concertVideoThree: '',
            bandPhoto: '',
        },
        isHidden: true,
    }

    // componentDidMount() to retreive /api/band data
    componentDidMount() {
        axios.get('/api/band')
            .then((res) => {
                this.setState({ listOfBands: res.data })
            })
    }

    // createBand() - posts band & genre from input feilds (which are set to state) to the backend /api/band
    createBand = (evt) => {
        evt.preventDefault()
        const newBand = this.state.newBand

        axios.post('/api/band', newBand)
            .then((res) => {
                this.componentDidMount()
            })
    }

    // handleInputChange() - sets state from input feild tageted in input field below
    handleInputChange = (evt) => {
        const copiedNewBand = { ...this.state.newBand }
        copiedNewBand[evt.target.name] = evt.target.value;
        this.setState({ newBand: copiedNewBand })
    }


    // toggles seeing create concert form with create form button
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    alertBandMade = () => {
        alert("Band Created!");
    }

    // band form toggled on and off by create band button
    bandForm = () => {
        return (
            <div className='createForm'>
                <form onSubmit={this.createBand}>
                    <h2>Create Band</h2>

                    <input
                        type="string"
                        name="bandName"
                        placeholder="Band Name"
                        required="required"
                        onChange={this.handleInputChange}
                        value={this.state.newBand.bandName} />

                    <input
                        type="string"
                        name="genre"
                        placeholder="Genre"
                        required="required"
                        onChange={this.handleInputChange}
                        value={this.state.newBand.genre} />

                    <input
                        type="string"
                        name="bandPhoto"
                        placeholder="Band Photo"
                        onChange={this.handleInputChange}
                        value={this.state.newBand.bandPhoto} />

                    <br />
                    <br />

                    <input
                        type='string'
                        name='concertVideoOne'
                        placeholder='Video One'
                        onChange={this.handleInputChange}
                        value={this.state.newBand.concertVideoOne} />

                    <input
                        type='string'
                        name='concertVideoTwo'
                        placeholder='Video Two'
                        onChange={this.handleInputChange}
                        value={this.state.newBand.concertVideoTwo} />

                    <input
                        type='string'
                        name='concertVideoThree'
                        placeholder='Video Three'
                        onChange={this.handleInputChange}
                        value={this.state.newBand.concertVideoThree} />

                    <br />
                    <br />

                    <input className='submitFormButton' onClick={this.alertBandMade} type='submit' value="Create Band"></input>
                </form>
            </div>
        )
    }


    // Rendered in Browser
    render() {

        const listOfBands = this.state.listOfBands.map(
            (band) => {
                return <div className='oneBandFromListOfBands'>
                    <Link to={`/band/${band._id}`}>
                        <p>
                            <h2>{band.bandName}</h2>
                            <div className='oneBandPhotoFromListOfBands'>
                                <img src={band.bandPhoto} alt="band photo" />
                            </div>
                        </p>
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
                    <div className='headerRight' id='allBandsHeaderPhoto'>
                        <h1>My Bands</h1>
                    </div>
                </div>


                <div className='body'>
                    <div className='allBandsSectionContainer'>
                        <h1 className='bodySectionTitle'>Bands</h1>

                        <div className='listOfBandsContainer'>
                            {listOfBands}
                        </div>
                    </div>

                    <div className='createFormArea'>
                        <h1 className='bodySectionTitle'>Create New Band</h1>
                        <div>
                            {/* button that toggles the create pretzel form. */}
                            <button className='createNewFormButton' onClick={this.toggleHidden}>New Band Form</button>
                        </div>
                        {this.state.isHidden === false ? this.bandForm() : null}
                    </div>
                </div>

            </div >
        )
    }
}
