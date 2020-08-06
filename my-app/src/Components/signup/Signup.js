import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/signup.css'
import useForm from './useForm'
import onSubmitValidate from './FormValidation'

import AuthContext from '../../context/authContext/authContext'


function SignUp(props){

    const {signupUser, userAuth, errors, setError, clearError} = useContext(AuthContext)

    const {handleSubmit , handleChange , handleCheck, values,userNameValue, checks, error, success, isSubmitting, description, signDisable} = useForm(submit, onSubmitValidate);
    

    function submit(){
        console.log("submit " + isSubmitting)
        signupUser({"firstName":values.firstName, 
                        "lastName":values.lastName,
                        "email": values.email,                        
                        "password": values.password,
                        "userName": userNameValue.userName,
                        "image": "defaultUser.jpeg",
                        "activeStatus": true,
                        "role": "user"

                    })
        clearError()
        //console.log(userAuth)
    }

    useEffect(() => {
        //console.log("submit " + isSubmitting)
        if(isSubmitting){
            props.history.push('/signin')
        } 
    }, [userAuth, props.history])

    return(
        <div className="wrapper">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit} noValidate>
                    <h1>Create Account</h1>
                    <div className="firstName">
                        <input
                            className = {error.firstName ? "error" : success.firstName ? "success" : null}
                            type="text"
                            placeholder="First name"
                            name="firstName"
                            noValidate
                            value={values.firstName}
                            onChange={handleChange}
                            onClick={handleChange}
                        />
                        {description.firstName  && 
                            <div className="des">
                                <p className="desPera">Must have 3 words atleast<br></br>
                                                       e.g. Max</p>
                            </div>                        
                        }
                    </div>
                    <div className="lastName">
                        <input
                            className = {error.lastName ? "error" : success.lastName ? "success" : null}
                            type="text"
                            placeholder="Last name"
                            name="lastName"
                            noValidate
                            value={values.lastName}
                            onChange={handleChange}
                            onClick={handleChange}
                        />
                        {description.lastName  && 
                            <div className="des">
                                <p className="desPera">Must have 3 words atleast<br></br>
                                                       e.g. Max</p>
                            </div>                        
                        }
                        {/*error.lastName && <p className="errorMessage">{error.lastName}</p>*/}
                    </div>                                   
                    <div className="email">
                        <input
                            className = {error.email ? "error" : success.email ? "success" : null}
                            type="text"
                            placeholder="Email (someone@gmail.com)"
                            name="email"
                            noValidate 
                            value={values.email}
                            onChange={handleChange}
                            onClick={handleChange}
                        />
                        {/*error.email && <p className="errorMessage">{error.email}</p>*/}
                        {/*success.email && <p className="successMessage">{success.email}</p>*/}
                    </div>
                    <div className="password">
                        <input
                            className = {error.password ? "error" : success.password ? "success" : success.confirmPassword ? "success" : null}
                            type={checks.confirmPasswordShow ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            noValidate
                            value={values.password}
                            onChange={handleChange}
                            onClick={handleChange}
                        />
                        <div className='show-password-wrapper'>
                            {/*<input  
                                type='checkbox'
                                name='passwordShow'
                                checked={checks.passwordShow}
                                onChange={handleCheck}>                            
                            </input>
                            <div className= 'show-password'>
                                <p>show password</p>
                            </div>*/}                            
                    </div>
                       
                        {description.password  && 
                            <div className="des">
                                <p className="desPera">1) Must not be empty<br></br>
                                                       2) At least 10 words<br></br>
                                                       3) Better if alphanumeric</p>
                            </div>
                        }
                        {/*error.password && <p className="errorMessage">{error.password}</p>*/}
                        {/*success.password && <p className="successMessage">{success.password}</p>*/}
                    </div>
                    
                    <div className="password">
                        <input
                            className = {error.confirmPassword ? "error pass-space" : success.confirmPassword ? "success pass-space" : "pass-space"}
                            type={checks.confirmPasswordShow ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            noValidate
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onClick={handleChange}
                        />
                        <div className='show-password-wrapper'>
                            <input  
                                type='checkbox'
                                name='confirmPasswordShow'
                                checked={checks.confirmPasswordShow}
                                onChange={handleCheck}>                            
                            </input>
                            <div className= 'show-password'>
                                <p>show password</p>
                            </div>
                            
                        </div>
                        {/*error.confirmPassword && <p className="errorMessage">{error.confirmPassword}</p>*/}
                        {/*success.confirmPassword && <p className="successMessage">{success.confirmPassword}</p>*/}
                    </div>
                    <div className={error.check_agreement ? "error-check-agreement-wrapper" : "check-agreement-wrapper"}>
                        <input  
                            type='checkbox'
                            name="check_agreement" 
                            checked={checks.check_agreement}
                            onChange={handleCheck}>
                            
                        </input>
                        <div className='check-agreement'>
                            <p>I agree to the  
                                <Link className="link">ZFM WEB ANALYTICS terms and conditions</Link>
                                and acknowledge the
                                <Link className="link">Privacy Statement</Link>
                            </p>                              
                        </div>
                    </div>
                        
                    <div className={checks.check_agreement ?  "invisible" : 'agreement-wrapper' }>
                        <p>Agreement to the WEB BASE ANALYTICS terms of use and privacy statement is required. Please check the box above the agreement</p>
                    </div>
                    <div className="createAccount">
                        <button type="submit" disabled = {signDisable}
                                className = {signDisable ? "buttonDis" : "buttonEn"}>Create Acount</button>
                    </div>
                    <div className='question'>
                        {errors !== null && <button className='error-alert'>{errors.msg ? errors.msg : errors.error[0].msg}</button>}
                        <p>Already Have an Account?
                        <Link to="/signin" className="signin">Login</Link>
                        </p>
                    </div>                        
                </form>
            </div>
        </div>
    
    );
}


export default SignUp