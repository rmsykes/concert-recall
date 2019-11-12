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

                <nav>
                    <Link to='/'><h3>Home</h3></Link>
                    <Link to='/concert'><h3>Concerts</h3></Link>
                    <Link to='/band'><h3>Bands</h3></Link>
                    <Link to='/venue'><h3>Venues</h3></Link>
                </nav>

                <h1>Home Page</h1>

                <div>
                    <div className='home-link'>
                    <Link to={'/concert'} ><h3>My Concerts</h3><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.goodfreephotos.com%2Falbums%2Fpeople%2Fcrowd-and-lights-at-a-concert.jpg&f=1&nofb=1" alt="concert photo" /></Link>
                    </div>

                    <div className='home-link'>
                    <Link to={'/band'}><h3>My Bands</h3> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fquality%3D100%26image_uri%3Dhttp%253A%252F%252Fwww.blogcdn.com%252Fwww.joystiq.com%252Fmedia%252F2011%252F08%252Frhcp530pxdph.jpg%26client%3Dcbc79c14efcebee57402%26signature%3Dd5d93a072070c14f57f453016e0340837cd7cc53&f=1&nofb=1" alt="band photo" /></Link>
                    </div>

                    <div className='home-link'>
                    <Link to={'/venue'}><h3>My Venues</h3> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.charlottefive.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fmusic-venues-visulite-charlotte2.jpg&f=1&nofb=1" alt="venue photo" /></Link>
                    </div>


                </div>


            </div>
        )
    }
}
