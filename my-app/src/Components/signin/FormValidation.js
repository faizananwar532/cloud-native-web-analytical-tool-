export default function formValidate(values, callback){
    let errors = {};
    console.log("callback  " + callback)

/****************************************Email********************************/

    if(!values.email){
        errors.email = "email required";
    }
    else if(!/\S+@\S+\.\S+/.test(values.email) && values.email.length > 0){
        errors.email ="email is invalid"
    }

/****************************************Password********************************/

    if(!values.password){
        errors.password = "password required"
    }
    else if(values.password.length < 10){
        errors.password = "minimum 10 characters required"
    }

    console.log(errors)
    return errors
}