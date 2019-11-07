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
            bandId: ''
        },
        listOfBands: [],
    }

    // componentDidMount() - retreives /api/concert data
    componentDidMount() {
        axios.get('/api/concert')
            .then((res) => {
                this.setState({ concertData: res.data })
            })
        this.getBands()
    }

    // getBands() - 
    getBands = () => {
            axios.get('/api/band')
            .then((res) => {
                this.setState({ listOfBands: res.data })
            })
    }


    // createConcert() - posts concertName, date, description from input feilds(which are set to state) to the backend /api/concert
    createConcert = (e) => {
        e.preventDefault()
        const newConcert = this.state.newConcert
        
        axios.post(`/api/concert`, newConcert)
            .then((res) => {
                this.componentDidMount()
            })
    }

    // onConcertNameChange() - sets the state of newConcertName from the input feild for Concert Name when called on a change contiuousely
    handleInputChange = (evt) => {
        const copiedNewConcert = {...this.state.newConcert}
        copiedNewConcert[evt.target.name] = evt.target.value;
        this.setState({ newConcert: copiedNewConcert })
    }


    // Rendered in Browser
    render() {

        const listOfConcerts = this.state.concertData.map(
            (concertData) => {
                return <div>
                    <Link to={`/concert/${concertData._id}`}>
                        <div  className="link">
                            {concertData.concertName}
                        </div>
                    </Link>

                </div>
            }
        )

        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Concerts</h1>

                
                {listOfConcerts}
               

                <div className='createForm'>
                <form onSubmit={this.createConcert}>
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

                    <input
                        type="string"
                        name="description"
                        placeholder="Concert Description"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.newConcertDescription}
                    />

                    <select 
                        name="bandId"
                        onChange={this.handleInputChange}
                        value={this.state.newConcert.bandId}
                         >
                        {this.state.listOfBands.map(
                            (band) => {
                                return <option value={band._id}>{band.bandName}</option>
                            }
                        )}

                    </select>
                    <input type="submit" value="Create Concert"/>
                </form>
                    {/* <button onClick={() => this.createConcert()}>Create Concert</button> */}
                </div>
            </div>
        )
    }
}
