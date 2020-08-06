import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import '../../styles/signin.css'
import UserSignIn from './userSignin'
import AdminSignIn from './adminSignin'
import AuthContext from '../../context/authContext/authContext'



function SignIn(props){  
    const [isUserLogin, setIsUserLogin] = useState(true)

    const userSignInHandle = () => {
        setIsUserLogin(true)
    }
    const adminSignInHandle = () => {
        setIsUserLogin(false)
    }
    const {userAuth} = useContext(AuthContext)    
    useEffect(() => {
        //console.log("submit " + isSubmitting)
        if(userAuth === true){
            props.history.push('/details')
        }
    }, [userAuth, props.history])

    return(
        <div className="wrapper">
            <div className="form-wrapper-signin">
                <button className="form-user-signin" onClick={userSignInHandle} autoFocus>
                    User SignIn
                </button>
                <button className="form-admin-signin" onClick={adminSignInHandle}>
                    Admin SignIn
                </button>
            </div>
            <div className="form-outer-wrapper">                
                <div className="signin-form-inner-wrapper">
                    {isUserLogin ? <UserSignIn/> : <AdminSignIn/>}
                </div>                                             
            </div>
        </div>
    
    );
}


export default SignIn