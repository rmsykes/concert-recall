// Import React, { Component }, Axios, and { Link }
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Create and Export AllConcerts Component
export default class AllConcerts extends Component {

    // AllConcerts Component State
    state = {
        concertData: [],
        newConcertName: '',
        newConcertDate: '',
        newConcertDescription: '',
    }

    // componentDidMount() - retreives /api/concert data
    componentDidMount() {
        axios.get('/api/concert')
            .then((res) => {
                this.setState({ concertData: res.data })
            })
    }


    // createConcert() - posts concertName, date, description from input feilds(which are set to state) to the backend /api/concert
    createConcert = () => {
        const newConcert = {
            concertName: this.state.newConcertName,
            date: this.state.newConcertDate,
            description: this.state.newConcertDescription
        }
        axios.post(`/api/concert`, newConcert)
        .then((res) => {
            this.componentDidMount()
        })
    }

    // onConcertNameChange() - sets the state of newConcertName from the input feild for venue when called on a change contiuousely
    onConcertNameChange = (evt) => {
        const newConcertName = evt.target.value;
        this.setState({ newConcertName: newConcertName})
    }


    // Rendered in Browser
    render() {

        const listOfConcerts = this.state.concertData.map(
            (concertData) => {
                return <div>
                    <Link to={`/concert/${concertData._id}`}>
                        {concertData.concertName}
                    </Link>

                </div>
            }
        )

        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Concerts</h1>

                {listOfConcerts}


                <input
                    type="string"
                    name="newConcertName"
                    placeholder="Concert Name"
                    required="required"
                    onChange={this.onConcertNameChange}
                    value={this.state.onConcertNameChange}
                />

                <input
                    type="string"
                    name="newConcertDate"
                    placeholder="Concert Date"
                    required="required"
                />

                <input
                    type="string"
                    name="newConcertDescription"
                    placeholder="Concert Description"
                />

                <button onClick={() => this.createConcert()}>Create Concert</button>
            </div>
        )
    }
}
