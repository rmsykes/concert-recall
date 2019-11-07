// Step 1 import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'


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
            newBandName: this.state.newBandName,
            newBandGenre: this.state.newBandGenre
        }
        axios.post('/api/band', newBand)
            .then((res) => {
                this.componentDidMount()
            })
    }

    // onBandNameChange() - sets the state of newBandName from th input feild for newBandName
    onBandNameChange = (evt) => {
        const newBandName = evt.target.value;
        this.setState({ newBandName: newBandName })
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
                    <h2>{band.bandName}</h2>
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
                        required="required" />

                    <button onClick={() => this.createBand()}>Create Band</button>
                </div>

            </div>
        )
    }
}
