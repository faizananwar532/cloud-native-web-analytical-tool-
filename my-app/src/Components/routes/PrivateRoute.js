import React , {useContext}from 'react'
import AuthContext from '../../context/authContext/authContext'
import {Route , Redirect } from 'react-router-dom'


const PrivateRoute = ({component : Component , ...reast}) => {
    const {userAuth} = useContext(AuthContext);
    return (
        <Route
        {...reast}
        render={props => !userAuth ? (<Redirect to = './signin' />) : (<Component {...props} />)}
        />
    )
}

export default PrivateRoute
