import {useState, useEffect} from 'react'
import Axios from 'axios'

const useForm = (emailUpdateCallBack, passUpdateCallBack, picUpdateCallBack) => {
    const [values , setValues] = useState({
        oldEmail: "" , 
        newEmail: "",
        oldPass: "", 
        newPass: "", 
        confirmPass: "",
        password: ""
    });
    const [file , setFile] = useState();

    const [error , setError] = useState({});
    const [success, setSuccess] = useState({});

    const [case1, setCase1] = useState(false);
    const [case2, setCase2] = useState(false);
    const [case3, setCase3] = useState(false);
    const [case4, setcase4] = useState(false);
    const [case5, setCase5] = useState(false);
    const [case6, setCase6] = useState(false);
    const [case7, setCase7] = useState(false);

    const [description , setDescription] = useState({});

    const [isPicUpdate, setPicUpdate] = useState(false);
    const [isEmailUpdate, setEmailUpdate] = useState(false);
    const [isPassUpdate, setPassUpdate] = useState(false);

    const [isDisableUpdateEmail, setDisableUpdateEmail] = useState(true);
    const [isDisableUpdatePass, setDisableUpdatePass] = useState(true);
    const [isDisableUpdatePic, setDisableUpdatePic] = useState(true);



    const handleChange = event => {
        const {name, value} = event.target;
        console.log(event.target.value)
        let FV_error = {}
        let success = {}
        let des = {}
        setValues(
            {                
                ...values,
                [name] : value
            }           
        )
        switch(name) {
            case "oldEmail":
                if(!/\S+@\S+\.\S+/.test(value) && value.length > 0){
                    FV_error.oldEmail ="email is invalid"
                    setCase1(false)
                }
                else if(value.length > 0) {
                    success.oldEmail = "valid"
                    setCase1(true)
                }

                if(value.length>= 0){
                    des.oldEmail = "email"
                }
                setError(FV_error);
                setSuccess(success);
                setDescription(des)                
                break;
            case "newEmail":                
                if(!/\S+@\S+\.\S+/.test(value) && value.length > 0){
                    FV_error.newEmail ="email is invalid"
                    setCase2(false)
                }
                else if(value.length > 0) {
                    success.newEmail = "valid"
                    setCase2(true)
                }

                if(value.length>= 0){
                    des.newEmail = "email"
                }
                setError(FV_error);
                setSuccess(success);
                setDescription(des)                
                break;

            case "oldPass":
                if(value.length > 0){
                    if(value.length < 10){
                        FV_error.oldPass = "minimum 10 characters required"
                        setCase3(false)
                    } 
                    else {
                        success.oldPass = "valid"
                        setCase3(true)
                    }
                }

                setError(FV_error);
                setSuccess(success);
                setDescription(des);
                
                break;

            case "newPass":
                if(value.length > 0){
                    if(value.length < 10){
                        FV_error.newPass = "minimum 10 characters required"
                        setcase4(false)
                    }
                    else {
                        success.newPass = "valid"
                        setcase4(true)
                    }
                }            

                if(value.length>= 0){
                    des.newPass = "password"
                }

                setError(FV_error);
                setSuccess(success);
                setDescription(des);
                
                break;
            case "password":
                if(value.length > 0){
                    if(value.length < 10){
                        FV_error.password = "minimum 10 characters required"
                        setCase6(false)
                    }
                    else {
                        success.password = "valid"
                        setCase6(true)
                    }
                }
                if(value.length>= 0){
                    des.password = "password"
                }

                setError(FV_error);
                setSuccess(success);
                setDescription(des);
                
                break;

            case "confirmPass":
                if(values.confirmPass.length < 1){
                    FV_error.confirmPass = "password required before confirm it"
                    setCase5(false)
                }
                else if(value !== values.newPass){
                    FV_error.confirmPass = "mismatch"
                    setCase5(false)
                }
                else {
                    success.confirmPass = "match"
                    success.newPass = "match"
                    setCase5(true)
                }

                if(value.length>= 0){
                    des.confirmPass = "confirm pass"
                }

                setError(FV_error);
                setSuccess(success);
                setDescription(des)
                
                break;
                
            default:
                setError(FV_error);
                setSuccess(success);
        }
        //console.log(values)
    }

    const handlePicChange = event =>{
        const file = event.target.files[0]
        setFile(file);

        if(file.length <= 0){
            setDisableUpdatePic(true)
        }
        else{
            setDisableUpdatePic(false)
        }
        console.warn("datafile", file)
        /*const data = new FormData();
        data.append('file', file);
        Axios.post("https;/httpbin.org/anything" , data).then(res => console.log(res)).catch(err => console.log(err));*/
    }

    const handleEmailSubmit = event => {
        event.preventDefault();       
        setEmailUpdate(!isEmailUpdate);
        console.log("Email Update")
    }

    const handlePassSubmit = event => {
        event.preventDefault();       
        setPassUpdate(!isPassUpdate);
        console.log("Password Update")
    }

    const handlePicSubmit = event => {
        event.preventDefault();       
        setPicUpdate(!isPicUpdate);
        console.log("asdsasdasdasdasdas")
    }


    useEffect(() => {
        if (Object.keys(error).length === 0 && isEmailUpdate){
            emailUpdateCallBack();
            setEmailUpdate(!isEmailUpdate)
        }
        else if (Object.keys(error).length === 0 && isPassUpdate){
            passUpdateCallBack();
            setPassUpdate(!isPassUpdate)
        }
        else if (Object.keys(error).length === 0 && isPicUpdate){
            picUpdateCallBack();
            setPicUpdate(!isPicUpdate)
        }

        if(case1 && case2 && case6){
            setDisableUpdateEmail(false)
        }
        else{
            setDisableUpdateEmail(true)
        }

        if(case3 && case4 && case5){
            setDisableUpdatePass(false)
        }
        else{
            setDisableUpdatePass(true)
        }


      })

    return{        
        handleChange,
        handlePicChange,
        handleEmailSubmit,
        handlePassSubmit,
        handlePicSubmit,
        values,
        file,
        error,
        success,
        isEmailUpdate,
        isPassUpdate,
        isPicUpdate,
        isDisableUpdateEmail,
        isDisableUpdatePass,
        isDisableUpdatePic
    }
};

export default useForm;
