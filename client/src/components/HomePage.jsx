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
                    <div className='homeLink'>
                        <Link to={'/concert'} >
                            <p >
                                <h3>My Concerts</h3>
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.goodfreephotos.com%2Falbums%2Fpeople%2Fcrowd-and-lights-at-a-concert.jpg&f=1&nofb=1" alt="concert photo" />
                            </p>
                        </Link>
                    </div>

                    <div className='homeLink'>
                        <Link to={'/band'}>
                            <p >
                                <h3>Bands</h3>
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fquality%3D100%26image_uri%3Dhttp%253A%252F%252Fwww.blogcdn.com%252Fwww.joystiq.com%252Fmedia%252F2011%252F08%252Frhcp530pxdph.jpg%26client%3Dcbc79c14efcebee57402%26signature%3Dd5d93a072070c14f57f453016e0340837cd7cc53&f=1&nofb=1" alt="band photo" />
                            </p>
                        </Link>
                    </div>

                    <div className='homeLink'>
                        <Link to={'/venue'}>
                            <p>
                                <h3>Venues</h3>
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.charlottefive.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fmusic-venues-visulite-charlotte2.jpg&f=1&nofb=1" alt="venue photo" />
                            </p>
                        </Link>
                    </div>


                </div>


            </div>
        )
    }
}
