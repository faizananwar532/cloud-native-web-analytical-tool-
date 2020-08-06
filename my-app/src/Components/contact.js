import React, {useContext, useEffect, useState} from 'react'
import '../styles/contact.css'
import headImage from '../styles/images/img1.png'
import postman from '../styles/images/postman.webp'
import AuthContext from '../context/authContext/authContext'
function Contact(){

    const [values , setValues] = useState({
        name: "",
        email: "",
        query: ""
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setValues(
            {                
                ...values,
                [name] : value
            }           
        )
        console.log(values.query)
    }
   
    const handleQueryButton = event => {
        setValues(
            {
                name: "",
                email: "",
                query: "",

            }           
        )
        console.log(values.query , "Query")
        event.preventDefault();
        if(values.query.length > 0 && values.email.length > 0&& values.name.length >0){
            
                let userEmail= values.email
                let userQuery = values.query
                let queryStatus = "pending"
                let userRegistered = false
                fetch("http://localhost:5000/addQuery"
                ,{
                headers : { 
                    "Content-Type": "application/json",
                    "Accept": "application/json",               
                },
                method:"Post",
                body:JSON.stringify({
                    userEmail,
                    userQuery,
                    queryStatus,
                    userRegistered
                })

                }).then((res)=>res.json()).then((jsonResponse)=>{
                    console.log(jsonResponse.data, "Get User Messages")
                }).catch(err =>{
                    console.log(err)
            })            
        }         
    }

    useEffect(() => {
        
    },[values.email , values.query])
    return(
        <div className="container-fluid">
            <div className="row-class">
                <div className="contact-headings">
                    <h1>HAVE SOME QUESTIONS?</h1>
                    <h3>Send us a message with your query!!! </h3>
                </div>
                
                <div className = "col-xs-6 contact-form">
                    <div className="col-xs-6 headImage">
                        <img src={headImage} alt="Piture of sending message"></img>
                    </div>
                    
                    <div className="col-xs-6 contact-form-panel d-flex flex-column justify-content-center align-items-center">
                        <div className="send-message-wrapper w-100">
                            <div className="form-group">
                                <input onChange={handleChange} required type="text" className="form-control" id="name" name="name" placeholder="First Name"></input>
                            </div>
                            <div className="form-group">
                                <input onChange={handleChange} required type="text" className="form-control" id="eml" name="email" placeholder="Email"></input>
                            </div>
                            <div className="form-group">
                                <label for="comment">Comment:</label>
                                <textarea onChange={handleChange} required className="form-control" rows="5" id="comment" name="query" ></textarea>
                            </div>
                            <div className="send-message">
                                <button onClick={handleQueryButton} type="submit" className="btn success-contact-field" >SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>  

                </div>
                    
            </div>
            <div className="row-class" className="send-message-lower-wrapper">
                <h1><b>Or Contact us at</b></h1>
                <div className="col-xs-6" className='send-message-support'>
                    <div>
                    
                        <h2><i className="fa fa-envelope"></i> Email suport</h2>
                        <p>Email us at <a href="">someone@gmail.com</a></p>
                    </div>
                    <div>
                        <h2><i class="fa fa-phone size-2x"></i> Mobile support</h2>
                        <p>+92 42 37392319</p>
                    </div>
                    <div>
                        <h2><i class="fa fa-tty"></i> Phone suport</h2>
                        <p>+92 321 1234567</p>
                    </div>
                </div>
                <div className="col-xs-6" className="send-message-support-image">
                    <img src={postman} alt="Piture of sending message"></img>
                </div>
            </div>
    
        </div>
    );
}

export default Contact