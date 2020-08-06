import React, {useContext, useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import './css/userManagement.css'
import ModalUserQuery from './modalUserQuery'

import AuthContext from '../../../context/authContext/authContext'
 
function UserQueries(props) {
    const [modalShow, setModalShow] = useState(false);
    const {getUser , user} = useContext(AuthContext)
    const [selectedUser, setSelectedUser] = useState({
        num: 0,
        userQuery: "",
        userRegistered: "",
        queryStatus: "",
        userEmail: ""
    })

    const [users , setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/getQueries"
        ,{
           headers : { 
               "Content-Type": "application/json",
               "Accept": "application/json",               
           },
           method:"Post",
           body:JSON.stringify({
           })

        }).then((res)=>res.json()).then((jsonResponse)=>{
            console.log(jsonResponse.data, "Get User Messages")
                setUsers(jsonResponse.data) 
        }).catch(err =>{
            console.log(err)
        })
    },[])

    const openModal = (user,index) => {
        setSelectedUser({
            num: index + 1,
            userEmail: user.userEmail,
            userQuery: user.userQuery,
            userRegistered: user.userRegistered,
            queryStatus: user.queryStatus
        })
        setModalShow(true)
    }
    
    return (
        <div className = 'subLayout-section'>
            <div  className = 'subLayout-section-text'>
                <text>User Management</text>
            </div>
            <div className="p-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Query</th>
                            <th>User</th>
                            <th>User Status</th>
                            
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                        {users.map((user , index) => (
                                <tr key={index} onClick={() => openModal(user,index)}>
                                    <td>{index+1}</td>
                                    <td>{user.userEmail}</td>
                                    <td>{user.userQuery}</td>
                                    <td>{user.userRegistered ? "Registered" : "Unregistered"}</td>
                                    <td>{user.queryStatus}</td>
                                </tr> 
                        ))}

                        <ModalUserQuery
                            num = {selectedUser.num}
                            query = {selectedUser.userQuery}
                            email = {selectedUser.userEmail}
                            userRegister = {selectedUser.userRegister}
                            queryStatus = {selectedUser.queryStatus}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                                        
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

UserQueries.propTypes = {

}

export default UserQueries
 