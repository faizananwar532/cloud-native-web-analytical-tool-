import React from 'react'
import {Modal , Button} from 'react-bootstrap'
import './css/modal.css'
export default function ModalUserQuery(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <div className="modalHeader">
                <Modal.Title id="contained-modal-title-vcenter">            
                    {"User Details"}
                </Modal.Title>
                <div className='textHeader'>
                    <text>Query #</text>
                    <text>{props.num}</text>
                </div>
                
            </div>
        </Modal.Header>
        <Modal.Body>
          <div className="modalBody">
                <div>
                    <text className="modalBodyHeading">User Email:</text>
                    <text>{props.userEmail}</text>
                </div>
                <div>
                    <text className="modalBodyHeading">Query:</text>
                    <text >{props.userQuery}</text>
                </div>
                <div>
                    <text className="modalBodyHeading">Status:</text>
                    <text className = {props.queryStatus ? "modalActiveText" : "modalDeactiveText"}>{props.queryStatus}</text>
                </div>
                <div>
                   
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