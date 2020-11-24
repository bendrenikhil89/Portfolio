export const Validations = (props) => {
    let error = {};
    if(props.name.trim().length === 0){
        error = {...error, name: true}
    }

    if(props.email.trim().length === 0){
        error = {...error, email: true}
    }
    
    if(props.email.trim().length >0 && !validateEmail(props.email.trim())){
        error = {...error, emailPattern: true}
    }

    if(props.subject.trim().length === 0){
        error = {...error, subject: true}
    }
    if(props.message.trim().length === 0){
        error = {...error, message: true}
    }
    return error;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}