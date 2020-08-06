import {useState,useEffect} from 'react'

const useForm = (callback, onSubmitValidation, clearServerError) => {
    const [values , setValues] = useState({
            email: "", 
            password: ""
        });
    const [checks, setChecks] = useState(false);

    const [error , setError] = useState({});
    const [success, setSuccess] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [login, setLogin] = useState(true);

    const [case1, setCase1] = useState(false);
    const [case2, setCase2] = useState(false);
    
    const handleChange = event => {
        clearServerError();
        const {name, value} = event.target;
        console.log(event.target.value)
        let errors = {}
        let success = {}
        setValues(
            {                
                ...values,
                [name] : value
            }           
        )
        switch(name) {
            case "email":
                if(!/\S+@\S+\.\S+/.test(value)){
                    setCase1(false)
                    errors.email ="email is invalid"
                }
                else if(value.length > 0) {
                    success.email = "valid"
                    setCase1(true)
                }
                setError(errors);
                setSuccess(success);
                break;

            case "password":
                if(value.length < 10){
                        setCase2(false)
                    
                    errors.password = "minimum 10 characters required"
                }
                else {
                    success.password = "valid"
                    setCase2(true)
                }
                setError(errors);
                setSuccess(success);
                break;
                
            default:
                setError(errors);
                setSuccess(success);
        }
        
        //console.log(values)
    }

    const handleCheck = event =>{
        setChecks(!checks)
        console.log(checks.passwordShown)

    }

    const handleSubmit = event => {
        event.preventDefault();
        //handle Error        
        setError(onSubmitValidation(values))
        setIsSubmitting(!isSubmitting)
        
        
    }

    useEffect(() => {
        console.log(Object.keys(error).length)
        console.log(isSubmitting);
        if (Object.keys(error).length === 0 && isSubmitting){
            callback();
            setValues({
                email: "",
                password: ""
            })
        }

        console.log(values.password.length + "    " + values.email.length)
        if(case1 && case2){
            setLogin(false)
        }
        else{
            setLogin(true)
        }
        console.log("oyeeeeeeeeeeeeeeeeee            " + login)

    }, [error])
    
    return {
        handleSubmit,
        handleChange,
        handleCheck,
        checks,
        values,
        login,
        error,
        success,
        isSubmitting
    }
};

export default useForm;