// Import React, { Component }, Axios, Link
import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

// Create and Export OneConcert Component
export default class OneConcert extends Component {

    // OneConcert Component State
    state = {
        concert: {
            concertName: '',
            date: '',
            description: '',
            bandId: ''
        },
        band: {},
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
    }


    getOneBand = () => {
        axios.get(`/api/band/${this.state.concert.bandId}`)
            .then((res) => {
                this.setState({ band: res.data })
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
        return (
            
            this.state.isRedirect ? <Redirect to="/concert" /> : 

            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.concert.concertName}</h1>

                <h2><Link to={`/band/${this.state.concert.bandId}`}>{bandName}</Link></h2>

                <h2>{this.state.concert.date}</h2>
                <p>{this.state.concert.description}</p>

                <button onClick={() => this.deleteConcert()}>Delete This Concert</button>


            </div>
        )
    }
}
