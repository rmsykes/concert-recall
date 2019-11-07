// Import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'

// create and export OneBand Component
export default class OneBand extends Component {

    // OneBand Component State
    state = {
        band: {
            bandName: '',
            genre: ''
        }
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        axios.get(`/api/band/${this.props.match.params.bandId}`)
            .then((res) => {
                this.setState({ band: res.data })
            })
    }

    deleteBand = () => {
        axios.delete(`/api/band/${this.props.match.params.bandId}`)
        .then((res) => {
            // res.redirect('/band')
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
                <h1>{this.state.band.bandName}</h1>
                <h2>{this.state.band.genre}</h2>

                <button onClick={() => this.deleteBand(this.props.match.params.bandId)}>Delete Band</button>
            </div>
        )
    }
}
