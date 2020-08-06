import React, {useReducer} from 'react'
import axios from 'axios'

import AuthContext from './authContext'
import authReducer from './authReducer'

import setToken from '../../utils/setToken'
import {
    SUCCESS_SIGNUP,
    SUCCESS_SIGNIN,
    FAIL_SIGNUP,
    FAIL_SIGNIN,
    SET_ERROR,
    CLEAR_ERROR,
    LOG_OUT,
    SET_USER,
    AUTH_ERROR,
    FAIL_UPLOAD,
    SUCCESS_UPLOAD
} from '../types'

const AuthState = (props) => {
    const initialState={
        user: null,
        userAuth: null,
        errors: null        
    }
    const [state, dispatch] = useReducer(authReducer, initialState)


    //Get User

    const getUser = async () => {
        if(localStorage.token){
            setToken(localStorage.token)
        }
        try {
            const res = await axios.get('/signin')
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: err
            })
            
        }
    }
    //SIGNUP User

    const signupUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/signup', userData, config)
            dispatch({
                type: SUCCESS_SIGNUP,
                payload: res.data
            })
            
        } catch (error) {
            dispatch({
                type: FAIL_SIGNUP,
                payload: error.response.data
            })        
        }
    }

    //SignIN User

    const signinUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/signin', userData, config)
            dispatch({
                type: SUCCESS_SIGNIN,
                payload: res.data
            })
            
        } catch (error) {
            dispatch({
                type: FAIL_SIGNIN,
                payload: error.response.data
            })        
        }
    }

    //uploadEmail
    const uploadEmail = async userData => {
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        try {
            const res = axios.patch("/settings/email",userData,config)
            dispatch({
                type: SUCCESS_UPLOAD,
                payload: res.data
            })
            
        } catch (error) {
            dispatch({
                type: FAIL_UPLOAD,
                payload: error.response.data
            })            
        }
    }

    //uploadPass
    const uploadPass = async userData => {
        console.log("fuck you     " + userData.email)
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        try {
            const res = axios.patch("/settings/paswrd",userData,config)
            dispatch({
                type: SUCCESS_UPLOAD,
                payload: res.data
            })
            
        } catch (error) {
            dispatch({
                type: FAIL_UPLOAD,
                payload: error.response.data
            })            
        }
    }

    //uploadFile
    const uploadFile = async userData => {
        
        const data = new FormData();
        data.append('email', userData.email)
        data.append('image', userData.image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        try {
            const res = axios.patch("/settings/pic",data,config)
            dispatch({
                type: SUCCESS_UPLOAD,
                payload: res.data
            })
            
        } catch (error) {
            dispatch({
                type: FAIL_UPLOAD,
                payload: error.response.data
            })            
        }
    }

    const setError = error => {
        dispatch({
            type: SET_ERROR,
            payload: error
        })
    }

    const clearError = error => {
        dispatch({
            type: CLEAR_ERROR
        })
    }

    //logout user
    const logout = () => {
        dispatch({
            type: LOG_OUT
        })
    }





    return (
        <AuthContext.Provider value={{
            user: state.user,
            userAuth: state.userAuth,
            errors: state.errors,
            getUser: getUser,
            signupUser,
            signinUser,
            uploadEmail,
            uploadPass,
            uploadFile,
            logout,
            setError,
            clearError
        }}>{props.children}</AuthContext.Provider>
    )
}
export default AuthState