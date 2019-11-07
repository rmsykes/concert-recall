// Step 1 import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class AllBands extends Component {

    // AllBands Component State
    state = {
        listOfBands: [],
        newBandName: '',
        newBandGenre: ''
    }

    // componentDidMount() to retreive band data
    componentDidMount() {
        axios.get('/api/band')
            .then((res) => {
                this.setState({ listOfBands: res.data })
            })
    }


    // createBandOnClick() - posts band & genre from input feilds (which are set to state) to the backend /api/band
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


    onBandGenreChange = (evt) => {
        const newBandGenre = evt.target.value;
        this.setState({ newBandGenre: newBandGenre })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
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
