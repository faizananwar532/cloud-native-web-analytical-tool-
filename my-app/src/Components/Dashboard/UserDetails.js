import React, {useContext, useEffect} from 'react'
import './userDetailsDB.css'
import './SubMainSectionLayout.css'

import AuthContext from '../../context/authContext/authContext'
 
function UserDetails(props) {
    const {getUser , user} = useContext(AuthContext)
    let {image, password, email} = ""
    useEffect(() => {
        getUser()
        console.log("hey")
        if(user){
            image = user.image
            password = user.password
            email = user.email
        }
        //eslint-disable-next-line  
    },[image, password, email])

    
    return (
        <div className = 'subLayout-section'>
            <div  className = 'subLayout-section-text'>
                <text>Personal Details</text>
            </div>
            <div className='personal-details'>
                <div className='pd-unique'>
                    
                    <div className="pd-username">
                        <text>username</text>
                        <textPath readOnly className='pd-input'>{user && user.userName}</textPath>
                    </div>
                    <div className='pd-image-wrapper'>
                        <div className="image-container">                            
                            <img className="pd-image" src={user && "http://localhost:5000/"+user.image} alt="Logo" />
                        </div>
                    </div>
                   
                </div>
                
                <div className="pd-name">
                    <div className="pd-firstname">
                        <text >First Name</text>
                        <textPath readOnly className='pd-input'>{user && user.firstName}</textPath>
                    </div>
                    <div className="pd-lastname">
                        <text>Last Name</text>
                        <textPath readOnly className='pd-input'>{user && user.lastName}</textPath>
                    </div>
                </div>


                <div className="pd-email">
                    <text>Email</text>
                    <textPath readOnly className='pd-input'>{user && user.email}</textPath>
                </div>
            </div>

            <div className='pd-account-details'>
                <div className="pd-license">
                    <text>License :</text>
                    <text>Activated</text>
                </div>
                
                <div className="pd-acc-creation">
                    <text>Account Created On :</text>
                    <text>27-03-2020</text>
                </div>
            </div>
        </div>
    )
}

UserDetails.propTypes = {

}

export default UserDetails

