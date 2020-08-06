import React, {useContext, useEffect, useState} from 'react'
import {Table, Button} from 'react-bootstrap'
// import './css/userManagement.css'
// import ModalUser from './modalUser'

import AuthContext from '../../../context/authContext/authContext'
 
function UserQueriesForm(props) {
    let {getUser, user} = useContext(AuthContext)

    const [values , setValues] = useState({
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
        event.preventDefault();
        console.log(user)
        if(values.query.length > 0){
            if(user){
                let userEmail= user.email
                let userQuery = values.query
                let queryStatus = "pending"
                let userRegistered = true
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
            console.log(values.query , "Query")
        }         
    }
    useEffect(() => {
        getUser()
    },[])
    
    return (
        <div className = 'subLayout-section'>
            <div  className = 'subLayout-section-text'>
                <text>FAQs</text>
            </div>             
            <div className="col-xs-6 contact-form-panel">
                <div className="p-5">
                    <form className=" d-flex flex-column">
                    
                        <div className="form-group">
                            <input required type="text" className="form-control" readOnly id="eml" value={user && user.email} name="email" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <label for="query">Query:</label>
                            <textarea required className="form-control" placeholder="Enter your Qury Here" rows="5" id="query" name="query" value={values.query} onChange={handleChange}></textarea>
                        </div>
                        <div className="send-message">
                            <button onClick={user && handleQueryButton} type="submit" className="btn success-contact-field" >SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}

UserQueriesForm.propTypes = {

}

export default UserQueriesForm
 