// Import React, { Component }, Axios, and { Link }
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


// Create and Export HomePage Component
export default class HomePage extends Component {

    // HomePage Component State
    state = {
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
            <div className='homePage'>
                <div className='navBar'>
                    <h2 className='navPageTitle'>Concert Recall</h2>
                    <nav>
                        <Link to='/'>
                            <div class="navButton">
                                <div>Home</div>
                            </div>
                        </Link>

                        <Link to='/concert'>
                            <div class="navButton">
                                <div>Concerts</div>
                            </div>
                        </Link>

                        <Link to='/band'>
                            <div class="navButton">
                                <div>Bands</div>
                            </div>
                        </Link>

                        <Link to='/venue'>
                            <div class="navButton">
                                <div>Venues</div>
                            </div>
                        </Link>
                    </nav>
                </div>

                <div className='header'>
                    <div className='headerLeft'>
                        {/* blank black space left of header */}
                    </div>
                    <div className='headerRight' id='homeHeaderPhoto'>
                        <h1>Watch Concerts By Your Favorite Bands. <br />
                            Document Your Past Live Shows.
                        </h1>
                    </div>
                </div>

                


                <div className='body'>
                <h1 className='bodySectionTitle' id='homeBodySectionTitle'>Home</h1>

                    <div className='homeLink'>
                        <Link to={'/concert'} >
                            <p >
                                <h3>Concerts</h3>
                                <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="concert photo" />
                            </p>
                        </Link>
                    </div>

                    <div className='homeLink'>
                        <Link to={'/band'}>
                            <p >
                                <h3>Bands</h3>
                                <img src="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80" alt="band photo" />
                            </p>
                        </Link>
                    </div>

                    <div className='homeLink'>
                        <Link to={'/venue'}>
                            <p>
                                <h3>Venues</h3>
                                <img src="https://images.unsplash.com/photo-1561114601-81d07393ee3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80" alt="venue photo" />
                            </p>
                        </Link>
                    </div>


                </div>


            </div>
        )
    }
}
