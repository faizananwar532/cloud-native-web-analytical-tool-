export default function formValidate(values, checks, callback){
    let errors = {};
    console.log("callback  " + callback)

/****************************************Firstt Name********************************/

    if(!values.firstName){
        errors.firstName = "first name required"
    }
    else if(values.lastName.length < 3){
        errors.firstName = "required at least 3 words"
    }

/****************************************Last Name********************************/

    if(!values.lastName){
        errors.lastName = "last name required"
    }
    else if(values.lastName.length < 3){
        errors.firstName = "required at least 3 words"
    }

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
    else if(values.password !== values.confirmPassword){
        errors.password = "mismatch"
    } 

/*****************************************Confirm Password********************************/

    if(!values.confirmPassword){
        errors.confirmPassword = "confirm the password"
    }
    else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "mismatch"
    }
   

/****************************************Check********************************/

    if(!checks.check_agreement){
        errors.check_agreement = "false"
    }

   /* if(!values.password){
        errors.password = "passwoed required";

    } else if(values.password.length < 10){
        errors.password ="minmum 3 characters"
    }*/

    console.log(errors)
    return errors
}