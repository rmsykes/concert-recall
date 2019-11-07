// Import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'

// Create and Export AllVenues Component
export default class AllVenues extends Component {

    // AllVenues Component State
    state = {
        venueData: []
    }

    // componentDidMount() to retreive /api/venue data
    componentDidMount() {
        axios.get('/api/venue')
            .then((res) => {
                this.setState({ venueData: res.data })
            })
    }



    // Rendered in Browser
    render() {

        const listOfVenues = this.state.venueData.map(
            (venueData) => {
                return <div>
                    {venueData.venueName}
                </div>
            }
        )


        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Venues</h1>

                {listOfVenues}

            </div>
        )
    }
}
