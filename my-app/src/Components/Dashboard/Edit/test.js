import React, {useEffect, useContext} from 'react'
import './userEditData.css'
import './SubMainSectionLayout.css'
import useForm from'./Edit/editUseForm'
import logo from '../../styles/images.jpeg'

import AuthContext from '../../context/authContext/authContext'

export default function editData (props) {
    
    const {handleChange, handlePicChange , handleEmailSubmit, handlePassSubmit , handlePicSubmit , 
            values , file, error, success,isEmailUpdate,isPassUpdate,isPicUpdate} = useForm(emailSubmit, passSubmit, picSubmit);
    const {uploadEmail, uploadPass, uploadFile, userAuth} = useContext(AuthContext)

    const {getUser , user} = useContext(AuthContext)

    function emailSubmit() {
        console.log(values.oldEmail + "   " + values.password + "  "  + values.newEmail)
        uploadEmail({
            "email": values.oldEmail,
            "newEmail": values.newEmail
        })      
    }

    function passSubmit() {
        if(user){
            console.log(user.email)        
            console.log(values.oldEmail + "   " + values.oldPass + "  "  + values.newPass)
            uploadPass({                
                "email": user.email,
                "password": values.oldPass,
                "newPassword" : values.newPass
            })
        }     
    }

    function picSubmit() {
        uploadFile({
            "file": file
        })      
    }

   /* useEffect(() => {
        console.log("submit " + isSubmitting)
        if(userAuth === true && isSubmitting ){
            props.history.push('/fileS')
        }
    }, [userAuth, props.history])*/

    return (
        <div className = 'subLayout-section'>
            <div  className = 'subLayout-section-text'>
                <text>Edit Details</text>                
            </div>
            
            <div className='edit-main-wrapper'>
                <div className='edit-headings'>
                    <div className='edit-email-heading'>
                        <text>Email</text>
                    </div>
                    <div className='edit-password-heading'>
                        <text>Password</text>
                    </div>
                    <div className='edit-picture-heading'>
                        <text>Picture</text>
                    </div>

                </div>
                <div className='edit-panels'>            
                    
                    
                    <div className='edit-picture'>
                        <form onSubmit={handlePassSubmit} noValidate>  
                            <div className="edit-image-container">                                                            
                                    <img className="edit-pic" src={logo} alt="Logo" />
                                    <input type='file' name='file' accept='.jpg' onChange={handlePicChange}></input>                                    
                            </div>
                            <button type='submit' className='save-button'>Upload</button>
                        </form> 

                    </div>
                </div>

            </div>
            
        </div>
    )
}
