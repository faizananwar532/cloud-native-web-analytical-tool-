import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../styles/about.css'

import musaPic from '../styles/images/musa.jpeg'
import fiazanPic from '../styles/images/faizan.jpg'
import zainPic from '../styles/images/zain.jpeg'

class About extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className = "row about-page-main-wrapper">
                    <h1 className='about-page-main-wrapper-h1'><b>About</b></h1>
                    <div className = "about-page-main-inner-wrapper">
                        <div className="col-xs-6 about-page-start-wrapper" > 
                            <h1><b>What is CNWA Tool</b></h1>
                            <p>
                                Our idea is to make a web portal where user can login and can use web analytical tool to monitor their website activity.
                                The main goal of our project is to give more access to user while keeping their data secure. 
                                Our idea is to make a web portal where user can login and can use web analytical tool to monitor their website activity.
                                The main goal of our project is to give more access to user while keeping their data secure. 
                                Our idea is to make a web portal where user can login and can use web analytical tool to monitor their website activity.
                                The main goal of our project is to give more access to user while keeping their data secure.
                                <br></br>
                                <br></br>
                                Our idea is to make a web portal where user can login and can use web analytical tool to monitor their website activity.
                                The main goal of our project is to give more access to user while keeping their data secure. 
                                Our idea is to make a web portal where user can login and can use web analytical tool to monitor their website activity.
                                The main goal of our project is to give more access to user while keeping their data secure. 
                                Our idea is to make a web portal where user can login and can use web analytical tool to monitor their website activity.
                                The main goal of our project is to give more access to user while keeping their data secure. 
                            </p>
                        </div>
                        <div className="col-xs-6 about-page-end-wrapper">
                            <h1><b>Our Objectives</b></h1>
                            <ul>
                                <li>Design a cloud based web platform.</li>
                                <li>Give user more access over there data.</li>
                                <li>To work on microservices.</li>
                                <li>Provide a secure platform where user’s data is not copromissed.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row about-page-secondary-wrapper">
                    <h1><b>Group Members</b></h1>
                    <div className="col-xs-4 about-page-secondary-wrapper-div">
                        <div className="card">
                            <img src={zainPic} alt="Jutt Da Muqabla" height="80%"></img> 
                            <div className="card-container">
                            <h4><b>M Zain Yousaf</b></h4> 
                            <p>FA16-BCS-176</p> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4 about-page-secondary-wrapper-div">
                        <div className="card">
                            <img src={fiazanPic} alt="CR Sahab" height="80%"></img>
                            <div className="card-container">
                                <h4><b>Faizan Anwar</b></h4> 
                                <p>FA16-BCS-195</p> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4 about-page-secondary-wrapper-div">
                        <div className="card">
                            <img src={musaPic} alt="Kocha" height="80%"></img>
                            <div className="card-container">
                            <h4><b>M Musa Khan</b></h4> 
                            <p>FA16-BCS-250</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About