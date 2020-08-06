import React from 'react'
import {Modal , Button} from 'react-bootstrap'
import './css/modal.css'
export default function ModalUser(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <div className="modalHeader">
                <Modal.Title id="contained-modal-title-vcenter">            
                    {"User Details"}
                </Modal.Title>
                <div className='textHeader'>
                    <text>User #</text>
                    <text>{props.num}</text>
                </div>
                
            </div>
        </Modal.Header>
        <Modal.Body>
          <div className="modalBody">
                <div>
                    <text className="modalBodyHeading">User ID:</text>
                    <text>{props.userName}</text>
                </div>
                <div>
                    <text className="modalBodyHeading">Name:</text>
                    <text >{props.firstName + " " + props.lastName}</text>
                </div>
                <div>
                    <text className="modalBodyHeading">Email:</text>
                    <text>{props.email}</text>
                </div>
                <div>
                    <text >Status:</text>
                    <text className={props.status ? "modalActiveText" : "modalDeactiveText"}>{props.status ? "Activated" : "Deactivated"}</text>
                </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button className={props.status ? "modalDeactiveButton" : "modalActiveButton"}>{props.status ? "Deactive User" : "Active User"}</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }