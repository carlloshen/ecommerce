const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,}|com|br)$/;

const validateFieldsLogin = (fields) =>{
    const {email, password} = fields
    if (
        !email ||
        typeof email !== "string" ||
        !EMAIL_REGEX.test(email)
      ) {
        return { errorMessage: "Invalid E-mail" };
      }
      if (!password) {
        return { errorMessage: "The password field must not be empty" };
      }
    
      return {
        errorMessage: "",
      };
}


const validateFieldsRegister = (fields) => {
    const {username, email, password} = fields
    if(!username || typeof username !== 'string'){
      return{errorMessage: "Invalid username"}
    }
    if (
      !email ||
      typeof email !== "string" ||
      !EMAIL_REGEX.test(email)
    ) {
      return { errorMessage: "Invalid E-mail" };
    }
    if (!password) {
      return { errorMessage: "Invalid password" };
    }
  
    return {
      errorMessage: ""
    }
  };

  const formsValidation = {validateFieldsLogin, validateFieldsRegister}

  export default formsValidation