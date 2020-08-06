import React, {useContext, useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import './css/userManagement.css'
import ModalUser from './modalUser'

import AuthContext from '../../../context/authContext/authContext'
 
function UserDetails(props) {
    const [modalShow, setModalShow] = useState(false);
    const {getUser , user} = useContext(AuthContext)
    const [selectedUser, setSelectedUser] = useState({
        num: 0,
        userName: "",
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userStatus: false
    })

    const [users , setUsers] = useState([])
    let {image, password, email} = ""
    useEffect(() => {
        fetch("http://localhost:5000/getUsers"
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
            userName: user.userName,
            userFirstName: user.firstName,
            userLastName: user.lastName,
            userEmail: user.email,
            userStatus: user.activeStatus
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
                            <th>Username</th>
                            <th>Email</th>
                            <th>Name</th>                        
                            <th>Status</th>
                        </tr>
                    </thead>
                    {console.log(users , "...........Users")}
                    <tbody>
                        
                        {users.map((user , index) => (
                                <tr key={index} onClick={() => openModal(user,index)}>
                                    <td>{index+1}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.firstName + " " + user.lastName}</td>
                                    <td>{user.activeStatus ? "active" : "deactive"}</td>
                                </tr> 
                        ))}

                        <ModalUser 
                            num = {selectedUser.num}
                            userName = {selectedUser.userName}
                            email = {selectedUser.userEmail}
                            firstName = {selectedUser.userFirstName}
                            lastName = {selectedUser.userLastName}
                            status = {selectedUser.userStatus}

                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                                        
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

UserDetails.propTypes = {

}

export default UserDetails

