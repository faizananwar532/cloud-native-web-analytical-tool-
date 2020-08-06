import React , {useContext} from 'react'
import PropTypes from 'prop-types'
import useForm from '../editUseForm'
import AuthContext from '../../../../context/authContext/authContext'
import '../Edit.css'


function PassModule(){
    const {handleChange, handlePassSubmit , handlePicSubmit , values , error, success,isPassUpdate , isDisableUpdatePass} = useForm(submit, passSubmit, submit);
    const { uploadPass, userAuth} = useContext(AuthContext)

    const {getUser , user} = useContext(AuthContext)

    function passSubmit() {
        if(user){
            console.log(user.email)        
            console.log(values.oldEmail + "   " + values.oldPass + "  "  + values.newPass)
            uploadPass({                
                "email": user.email,
                "password": values.oldPass,
                "newPassword" : values.newPass,
                "role": user.role
            })
        }     
    }

    function submit(){
        console.log("hey")
    }

    return(
        <div className='edit-module-wrapper'>
            <text className='edit-module-header'>Change Password</text>
            <input placeholder = 'Old Password'
                className = {error.oldPass ? "field-input-error" : success.oldPass ? "field-input-success" : "field-input"}
                name="oldPass"
                noValidate
                value={values.oldPass}
                onChange={handleChange}
                onClick={handleChange}></input>

            <input placeholder = 'New Password'
                className = {error.newPass ? "field-input-error" : success.newPass ? "field-input-success" : "field-input"}
                name="newPass"
                noValidate
                value={values.newPass}
                onChange={handleChange}
                onClick={handleChange}></input>

            <input placeholder = 'Confirm Password'
            className = {error.confirmPass ? "field-input-error" : success.confirmPass ? "field-input-success" : "field-input"}
                name="confirmPass"
                noValidate
                value={values.confirmPass}
                onChange={handleChange}
                onClick={handleChange}
                ></input>

            <button className='save-button' type='submit' onClick={handlePassSubmit}
                disabled = {isDisableUpdatePass}
                className = {isDisableUpdatePass ? "save-buttonDis" : "save-button"}
            >Upadte</button>
        </div>        
    )    
}


export default PassModule

