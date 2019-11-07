// Import React, { Component }, Axios, and { Link }
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Create and Export HomePage Component
export default class HomePage extends Component {

    // HomePage Component State
    state = {
        message: ''
    }

    // componentDidMount() - usually brings in data and sets state but no need really, this is useless here
    componentDidMount() {
        axios.get('/')
            .then((res) => {
                this.setState({ message: res.data })
            })
    }


    // Rendered in Browser
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Home Page</h1>

                <div>
                    <br/>
                    <Link to={'/concert'}>My Concerts</Link>
                    <br/>
                    <Link to={'/band'}>My Bands</Link>
                    <br/>
                    <Link to={'/venue'}>My Venues</Link>
                </div>


            </div>
        )
    }
}
