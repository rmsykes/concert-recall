// Import React, { Component }, and Axios
import React, { Component } from 'react'
import axios from 'axios'


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
                this.setState({ concertData: res.data})
            })
    }


    // Rendered in Browser
    render() {

        const listOfConcerts = this.state.concertData.map(
            (concertData) => {
                return <div> 
                    {concertData.concertName}
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
