// Import React, { Component }, Axios, and { Link }
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Create and Export AllConcerts Component
export default class AllConcerts extends Component {

    // AllConcerts Component State
    state = {
        concertData: []
    }

    // componentDidMount() - retreives /api/concert data
    componentDidMount() {
        axios.get('/api/concert')
            .then((res) => {
                this.setState({ concertData: res.data })
            })
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

            </div>
        )
    }
}
