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
        newBandGenre: ''
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
            genre: this.state.newBandGenre
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

    // onBandGenreChanve() - sets the state of the newGenreName from input feild for newBandGenre
    onBandGenreChange = (evt) => {
        const newBandGenre = evt.target.value;
        this.setState({ newBandGenre: newBandGenre })
    }


    // Rendered in Browser
    render() {

        const listOfBands = this.state.listOfBands.map(
            (band) => {
                return <div>
                    <Link to={`/band/${band._id}`}>
                        {band.bandName}
                    </Link>

                </div>
            })


        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Bands</h1>

                {listOfBands}

                <div>
                    <h2>Create New Band</h2>

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

                    <button onClick={() => this.createBand()}>Create Band</button>
                </div>

            </div>
        )
    }
}
