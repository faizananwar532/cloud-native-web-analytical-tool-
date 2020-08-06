import {useState,useEffect, useContext} from 'react'


const useForm = (callback, onSubmitValidation) => {
    const [values , setValues] = useState({
            firstName: "" , 
            lastName: "",
            email: "",
            password: "", 
            confirmPassword: "",
        });
    const [checks, setChecks] = useState({
        check_agreement: false,
        passwordShow: false,
        confirmPasswordShow: false
    });

    const [userNameValue, setUserNameValue] = useState({
        userName: ""
    });

    const [error , setError] = useState({});
    const [success, setSuccess] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [signDisable , setSignDisable] = useState(true)

    const [description , setDescription] = useState({});

    const [atTheRate, setAtTheRate] = useState(true);

    const [case1, setCase1] = useState(false);
    const [case2, setCase2] = useState(false);
    const [case3, setCase3] = useState(false);
    const [case4, setcase4] = useState(false);
    const [case5, setCase5] = useState(false);
    const [case6, setCase6] = useState(false);
    
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
            case "firstName":
                
                if(value.length > 0){          
                    if(value.length < 3){
                        FV_error.firstName = "required at least 3 words"
                        setCase1(false);
                    }
                    else {
                        success.firstName = "valid"
                        setCase1(true)
                    }
                }
                if(value.length>= 0){
                    des.firstName = "fn"
                }
                setError(FV_error);
                setSuccess(success);
                setDescription(des)

                
                break;

            case "lastName":
                if(value.length > 0){          
                    if(value.length < 3){
                        FV_error.lastName = "required at least 3 words"
                        setCase2(false)
                    }
                    else {
                        success.lastName = "valid"
                        setCase2(true)
                    }
                }

                if(value.length>= 0){
                    des.lastName = "ln"
                }

                setError(FV_error);
                setSuccess(success);
                setDescription(des)

                
                break;

            case "email":
                if(atTheRate){
                    setUserNameValue({
                        ["userName"]: value
                    })
                    console.log("yooo")
                    
                }
                if(value == values.email+"@"){
                    setAtTheRate(false)
                }
                if(!/\S+@\S+\.\S+/.test(value) && value.length > 0){
                    FV_error.email ="email is invalid"
                    setCase3(false)
                }
                else if(value.length > 0) {
                    success.email = "valid"
                    setCase3(true)
                }

                if(value.length>= 0){
                    des.email = "email"
                }

                setError(FV_error);
                setSuccess(success);
                setDescription(des)

                
                break;

            case "password":
                if(value.length > 0){
                    if(value.length < 10){
                        FV_error.password = "minimum 10 characters required"
                        setcase4(false)
                    }
                    else if(value !== values.confirmPassword && values.confirmPassword.length > 0){
                        FV_error.password = "mismatch"
                        setcase4(false)
                    } 
                    else {
                        success.password = "valid"
                        setcase4(true)
                    }
                }                

                if(value.length>= 0){
                    des.password = "password"
                }

                setError(FV_error);
                setSuccess(success);
                setDescription(des);
                
                break;

            case "confirmPassword":
                if(values.password.length < 1){
                    FV_error.password = "password required before confirm it"
                    setCase5(false)
                }
                else if(value !== values.password){
                    FV_error.confirmPassword = "mismatch"
                    setCase5(false)
                }
                else {
                    success.confirmPassword = "match"
                    setCase5(true)
                }

                if(value.length>= 0){
                    des.confirmPassword = "confirm pass"
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

    const handleCheck = event =>{
        const {name, checked} = event.target;
        setChecks({
            ...checks,
            [name] : checked          
        })
        
        switch(name){
            case "check_agreement":                
                if(case1 && case2 && case3 && case4 && case5 && !checks.check_agreement){
                    setSignDisable(false)
                }
                else{
                    setSignDisable(true)
                }
                break;            
        }
        console.log(checks.check_agreement)
    }
    

    const handleSubmit = event => {
        event.preventDefault();
        //handle Error
        setError(onSubmitValidation(values, checks))
        setIsSubmitting(!isSubmitting)
    }


    useEffect(() => {
        console.log(Object.keys(error).length)
        console.log(isSubmitting);
        if (Object.keys(error).length === 0 && isSubmitting){
            callback()        
        }
        if(case1 && case2 && case3 && case4 && case5 && checks.check_agreement){
            setSignDisable(false)
        }
        else{
            setSignDisable(true)
        }
    }, [error])


    return {
        handleSubmit,
        handleChange,
        handleCheck,
        values,
        userNameValue,
        checks,
        error,
        success,
        isSubmitting,
        description,
        signDisable      
    }
};

export default useForm;