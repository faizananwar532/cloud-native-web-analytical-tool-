import {
    SUCCESS_SIGNUP,
    SUCCESS_SIGNIN,
    FAIL_SIGNUP,
    FAIL_SIGNIN,
    SET_ERROR,
    CLEAR_ERROR,
    LOG_OUT,
    GET_USER,
    AUTH_ERROR,
    SET_USER,
    SUCCESS_UPLOAD,
    FAIL_UPLOAD
} from '../types'

export default (state,action)=>{
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user: action.payload,
                userAuth: true,
                errors: null
            }
        case SUCCESS_SIGNUP:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                userAuth:false,
                errors:null                
            }

        case SUCCESS_SIGNIN:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                userAuth:true,
                errors:null                
            }
        case FAIL_SIGNUP:
        case FAIL_SIGNIN:
        case LOG_OUT:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{ 
                ...state,
                user: null,
                userAuth:null,
                errors:action.payload
            }
        case SET_ERROR:
            return{
                ...state,
                errors:action.payload
            }
        case CLEAR_ERROR:
            return{
                ...state,
                errors:null           
            }
        case SUCCESS_UPLOAD:
            return{
                ...state,
                errors:null
            }
        case FAIL_UPLOAD:
            return{
                ...state,
                errors:action.payload
            }
        default:
            return state
    }
}