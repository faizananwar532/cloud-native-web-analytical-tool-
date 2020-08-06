import React , {useContext} from 'react'
import PropTypes from 'prop-types'
import useForm from '../editUseForm'
import AuthContext from '../../../../context/authContext/authContext'
import '../Edit.css'

export default function EmailModule(props) {

    const {handleChange , handleEmailSubmit,values, error, success,isEmailUpdate, isDisableUpdateEmail} = useForm(emailSubmit, submit, submit);
    const {uploadEmail, uploadPass, uploadFile, userAuth} = useContext(AuthContext)

    const {getUser , user} = useContext(AuthContext)

    function emailSubmit() {
        console.log(values.oldEmail + "   " + values.password + "  "  + values.newEmail)
        uploadEmail({
            "email": values.oldEmail,
            "password": values.password,
            "newEmail": values.newEmail,
            "role": user.role
        })         
    }
    function submit(){
        console.log("hey")
    }
    return (
        <div className='edit-module-wrapper'>
            <text className='edit-module-header'>Change Email</text>
                <input placeholder = 'Enter Old Email'
                    className = {error.oldEmail ? "field-input-error" : success.oldEmail ? "field-input-success" : "field-input"}
                    name="oldEmail"
                    noValidate
                    value={values.oldEmail}
                    onChange={handleChange}
                    onClick={handleChange}></input>

                <input placeholder = 'Password'
                    className = {error.password ? "field-input-error" : success.password ? "field-input-success" : "field-input"}
                    name="password"
                    noValidate
                    value={values.password}
                    onChange={handleChange}
                    onClick={handleChange}></input>

                <input placeholder = 'Enter New Email'
                    className = {error.newEmail ? "field-input-error" : success.newEmail ? "field-input-success" : "field-input"}
                    name="newEmail"
                    noValidate
                    value={values.newEmail}
                    onChange={handleChange}
                    onClick={handleChange}></input>

                <button type='submit' onClick={handleEmailSubmit} 
                    disabled={isDisableUpdateEmail}
                    className= {isDisableUpdateEmail ? "save-buttonDis" : "save-button"}    
                >Update</button>         
        </div>
    )
}

