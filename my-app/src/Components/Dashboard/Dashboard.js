import React, {useState, useEffect, useContext, Fragment} from 'react'
import './dashboard.css'

import UserDetails from './UserDetails'
import WebConnection from './WebConnection'
import  UserManagement from './Admin/userManagement'
import UserQuries from './Admin/userQueries'
import EditData from './editData'
import UserQuriesForm from './User/userQuriesForm'
import Tutorials from './User/tutorials'
import { Switch, Route,Link } from 'react-router-dom'
import AuthContaxt from '../../context/authContext/authContext'
import UserQueriesForm from './User/userQuriesForm'


export const Dashboard = () => {
    let {logout, clearError, getUser, user} = useContext(AuthContaxt)
    let {image, password, email} = ""

    const [isAdmin, setIsAdmin] = useState(false)
    const [isOnce,  setIsOnce] = useState(false)
    useEffect(() => {
        getUser()        
        //eslint-disable-next-line  
    },[])

    const onLogOut = () => {
        logout()
        clearError()
        user = null
        console.log(user, "Null User")
    }
    const changeState = (UserDetails) => {
        console.log(UserDetails.role, "........Role")
        if(UserDetails.role == "admin"){
            console.log("Admin Here")
            setIsAdmin(true)
            if(isAdmin){
                setIsOnce(true)
            }            
        }
        else{
            console.log("User Here")
            setIsAdmin(false)
            if(!isAdmin){
                setIsOnce(true)
            }
            
        }
        
    }
    return (
        <Fragment>        
            {!isOnce &&            
                <Fragment>   
                    {console.log(user)}
                    {user &&
                        changeState(user)
                    }
                </Fragment>
            }
            {isOnce &&
                <div className="main-wrapper">
                    <div className ="slider">
                        <div className="slider-header">
                            <button className = 'Round-Name-button'>{user && user.firstName.charAt(0)+ user.lastName.charAt(0)}</button>
                            <text>{user && user.firstName + " " + user.lastName}</text>
                        </div>
                        <div className="slider-menu">
                            <div className= 'core'>
                                {isAdmin && 
                                    <text className='head'>Admin Dashboad</text>
                                }
                                {!isAdmin && 
                                    <text className='head'>User Dashboad</text>
                                }                                
                                <ul>
                                    <li>
                                        <Link to='/details' className="dashboard-links">
                                        <button className='fst-dash-link-button' autoFocus>
                                            <i className="fa fa-user fa-lg"></i>
                                            <text>Personal Details</text>
                                            <i className="fa fa-angle-right fa-lg"></i>
                                        </button>
                                        </Link> 
                                    </li>
                                </ul>                        
                            </div>
                            
                            {!isAdmin &&

                                <Fragment>
                                    <div className='instances'>
                                        <text className='head'>instances</text>
                                        <ul>
                                            <li>
                                                <Link to='/webconnection' className="dashboard-links">                                       
                                                <button className='dash-link-button'>
                                                    <i class="fa  fa-link fa-lg"></i>
                                                    <text>Web connection</text>
                                                    <i className="fa fa-angle-right fa-lg"></i>
                                                </button>
                                                </Link>
                                            </li>
                                        </ul>                        
                                    </div>
                                    <div style = {{height: "20%" , marginBottom: "15%"}}>
                                        <text className='head' >Help and Support</text>
                                        <ul style = {{height: "100%", marginTop: "5%"}}>
                                            <li style = {{height: "50%"}}>
                                                <Link to='/queries' className="dashboard-links">                                       
                                                <button className='dash-link-button'>
                                                    <i class="fa  fa-link fa-lg"></i>
                                                    <text>FAQ</text>
                                                    <i className="fa fa-angle-right fa-lg"></i>
                                                </button>
                                                </Link>
                                            </li>
                                            <li style = {{height: "50%"}}>
                                                <Link to='userQueries' className="dashboard-links">                                       
                                                <button className='dash-link-button'>
                                                    <i class="fa  fa-link fa-lg"></i>
                                                    <text>Guidelines</text>
                                                    <i className="fa fa-angle-right fa-lg"></i>
                                                </button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>                        
                                </Fragment>
                            }
                            {isAdmin && 
                                <Fragment>
                                    <div style = {{height: "20%" , marginBottom: "15%"}}>
                                        <text className='head' >User instances</text>
                                        <ul style = {{height: "100%", marginTop: "5%"}}>
                                            <li style = {{height: "50%"}}>
                                                <Link to='/userManagement' className="dashboard-links">                                       
                                                <button className='dash-link-button'>
                                                    <i class="fa  fa-link fa-lg"></i>
                                                    <text>Management</text>
                                                    <i className="fa fa-angle-right fa-lg"></i>
                                                </button>
                                                </Link>
                                            </li>
                                            <li style = {{height: "50%"}}>
                                                <Link to='userQueries' className="dashboard-links">                                       
                                                <button className='dash-link-button'>
                                                    <i class="fa  fa-link fa-lg"></i>
                                                    <text>Queries</text>
                                                    <i className="fa fa-angle-right fa-lg"></i>
                                                </button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>                        
                                </Fragment>
                            }
                            <div className='instances'>
                                <text className='head'>Settings</text>
                                <ul>
                                    <li>
                                        <Link to='/settings/email' className="dashboard-links">
                                            <button className='dash-link-button'>
                                                <i className="fa fa-user fa-lg"></i>
                                                <text>Edit</text>
                                                <i className="fa fa-angle-right fa-lg"></i>
                                            </button>
                                        </Link>                                
                                    </li>
                                    
                                </ul>
                            </div>
                            
                                    
                                    
                            <div className="logout">
                                <button className="logout-button" onClick={onLogOut}>
                                    <i class="fa fa-circle-o-notch"></i>
                                    <text>logout</text>
                                </button> 
                            </div>                      
                        </div> 
                    </div>
                    <div className="dashboard">
                        <div className="dashboard-header">
                            <div className='upper-header'>
                                <div className='dashboard-upperHeader-icon'>
                                    {/*<i class="fa fa-list-ul fa-2x"></i>*/}
                                </div> 
                                <div className='dashboard-upperHeader-text'>
                                    <text>Welcome{user && " " + user.firstName + " " + user.lastName}</text>
                                </div>                               
                                
                                
                            </div>
                            <div className='mid-header'>

                            </div>
                            <div className='lower-header'>
                                {isAdmin && 
                                    <text>Admin Dashboard</text>
                                }
                                {!isAdmin && 
                                    <text>User Dashboard</text>
                                }
                            
                            </div>
                        </div>
                        <div className='db-background'>
                        </div>
                        <div className="dashboard-main">
                            <div className='subjects'>
                                <Route path='/details' component={UserDetails}/>
                                <Route path='/webconnection' component={WebConnection}/>
                                <Route path='/settings' component={EditData}/>
                                <Route path='/userManagement' component={UserManagement}/>
                                <Route path='/userQueries' component={UserQuries}/>
                                <Route path='/queries' component={UserQueriesForm}/>
                                <Route path='/tutorials' component={Tutorials}/>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
        
    )
    
}

export default Dashboard
