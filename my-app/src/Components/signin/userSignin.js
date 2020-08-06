import React, {useContext, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom';
import '../../styles/signin.css'
import useForm from './useForm'
import onSubmitValidate from './FormValidation'

import AuthContext from '../../context/authContext/authContext'


function UserSignIn(props){   
    const {handleSubmit , handleChange,handleCheck, checks, values, login, error, success, isSubmitting} = useForm(submit, onSubmitValidate, clearServerError);
    const {signinUser, userAuth, errors, setError, clearError} = useContext(AuthContext)
    
    function clearServerError(){
        clearError()
    }
    function submit() {
        signinUser({
            "email": values.email,
            "password": values.password,
            "role": "user"
        })
        //console.log(values)
    }

    // useEffect(() => {
    //     //console.log("submit " + isSubmitting)
    //     if(userAuth === true){
    //         props.history.push('/details')
    //     }

    //     console.log("bhai " + login + " hai")
    // }, [userAuth, props.history])

    return(
        <Fragment>
                <form onSubmit={handleSubmit} noValidate>
                    <h1>User Login!</h1>
                                                   
                    <div className="email">
                        <input
                            className = {error.email ? "error" : null || success.email ? "success" : null}
                            type="text"
                            placeholder="Email"
                            name="email"
                            noValidate 
                            value={values.email}
                            onChange={handleChange}
                        />
                        
                        {/*error.email && <p className="errorMessage">{error.email}</p>}
                        {success.email && <p className="successMessage">{success.email}</p>*/}
                    </div>
                    <div className="password">
                        <input
                            className = {error.password ? "error" : null || success.password ? "success" : null || success.confirmPassword ? "success" : null}
                            type = {checks ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            noValidate
                            value={values.password}
                            onChange={handleChange}
                        />
                        <div className='show-password-wrapper'>
                            <input  
                                    type='checkbox'
                                    name='passwordShown'
                                    checked={checks.confirmPasswordShow}
                                    onChange={handleCheck}>                            
                            </input>
                            <div className= 'show-password'>
                                    <p>show password</p>
                            </div>
                        </div>
                        
                        {/*error.password && <p className="errorMessage">{error.password}</p>}
                        {success.password && <p className="successMessage">{success.password}</p>*/}
                    </div>
                    
                    <div className="login">
                        <button
                        disabled = {login}
                        className= {login ? "buttonDis" : "buttonEn"}
                        type="submit">Login</button>                        
                    </div> 

                    <div className='question'>
                        {/*error.email && <button className='error-alert'>{error.email}</button>}
                        {error.password && <button className='error-alert'>{error.password}</button>*/}
                        {errors !== null && <button className='error-alert'>{errors.msg ? errors.msg : errors.error[0].msg}</button>}
                        <p>Don't Have an Account?
                        <Link to="/signup" className="signin">User Signup</Link>
                        </p>
                    </div>                       
                </form>
        </Fragment>    
    
    );
}


export default UserSignIn