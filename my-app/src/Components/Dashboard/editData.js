import React, {useEffect, useContext} from 'react'
import { Switch, Route,Link } from 'react-router-dom'
import './userEditData.css'
import './SubMainSectionLayout.css'
import useForm from'./Edit/editUseForm'
import logo from '../../styles/images.jpeg'

import EmailModule from './Edit/Email/emailModule'
import PassModule from './Edit/Password/passModule'
import PicModule from './Edit/Pics/picModule'

import AuthContext from '../../context/authContext/authContext'

export default function EditData(props) {
    return (
        <div className = 'subLayout-section'>
            <div  className = 'subLayout-section-text'>
                <text>Edit Details</text>                
            </div>
            
            <div className='edit-main-wrapper'>
                <div className='btns-for-edit'>
                    <Link to='/settings/email' className='btns-for-edit-link'>
                        <button autoFocus>
                            <text>Email</text>
                        </button>
                    </Link>
                    <Link to='/settings/paswrd' className='btns-for-edit-link'>
                        <button>
                            <text>Password</text>
                        </button>
                    </Link>
                    <Link to='/settings/pic' className='btns-for-edit-link'>
                        <button>
                            <text>Profile Pic</text>
                        </button>
                    </Link>

                </div>
                <div className="view-for-edit">
                    <div className="inner-view">
                        <Route path='/settings/email' component={EmailModule}/>
                        <Route path='/settings/paswrd' component={PassModule}/>
                        <Route path='/settings/pic' component={PicModule}/>
                    </div>                    
                </div>            
            </div>            
        </div>
    )
}
