// Import React, { Component }, and Axios
import React, { Component } from 'react'
import axios from 'axios'

// Create and Export OneConcert Component
export default class OneConcert extends Component {

    // OneConcert Component State
    state = {
        concert: {
            concertName: '',
            date: '',
            description: ''
        }
    }

    // componentDidMount() - retreives data on this concert
    componentDidMount() {
        axios.get(`/api/concert/${this.props.match.params.concertId}`)
            .then((res) => {
                this.setState({ concert: res.data})
            })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.concert.concertName}</h1>
                <h2>{this.state.concert.date}</h2>
                <p>{this.state.concert.description}</p>

            </div>
        )
    }
}
