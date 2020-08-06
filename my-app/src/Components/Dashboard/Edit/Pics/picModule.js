import React , {useContext} from 'react'
import PropTypes from 'prop-types'
import useForm from '../editUseForm'
import AuthContext from '../../../../context/authContext/authContext'
import '../Edit.css'

function PicModule() {

    const {handlePicChange, handlePicSubmit ,file, error, success,isPicUpdate , isDisableUpdatePic} = useForm(submit, submit, picSubmit);
    const {uploadEmail, uploadPass, uploadFile, userAuth} = useContext(AuthContext)

    const {getUser , user} = useContext(AuthContext)

    function picSubmit() {
        console.log("picModule")
        uploadFile({
            "email": user.email,
            "image": file,
            "role": user.role
        })      
    }

    function submit(){
        console.log("hey")
    }


    return (
        <div className='edit-module-wrapper'>
                <text className='edit-module-header'>Change Profile Picture</text>
                <form onSubmit={handlePicSubmit} noValidate>  
                    <div className="edit-image-container">                                                            
                        <img className="edit-pic" src={user && "http://localhost:5000/"+user.image} alt="Logo" />                                                                
                    </div>
                    <div className='select-image'>
                        <input type='file' name='file' accept='.jpg' onChange={handlePicChange}></input>
                    </div>
                    <div className='btn-pic-update'>
                        <button type='submit' className='save-button'
                            disabled={isDisableUpdatePic}
                            className= {isDisableUpdatePic ? "save-buttonDis" : "save-button"}
                        >Upload</button>
                    </div>
                </form>          
        </div>
    )
}

export default PicModule
