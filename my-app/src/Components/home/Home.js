import React, { Component } from 'react'
import '../../styles/home.css'
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return(
            <div className="container-fluid" hight="100%">
                <div className='home-image'></div>
                <div className="pageWrapper">
                    <div className="inner-pageWrapper">
                        <div>
                            <h3>Welcome</h3>
                            <h2>To</h2>
                        </div>
                       
                        <h1>Cloud Native Web Analytical Tool</h1>
                        <Link to='signup'>
                            <button>Sign Up</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home