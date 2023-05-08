const handleValidation=(email:string,name:string,message:string)=>{
    if (name.length <= 0||email.length <= 0||message.length <= 0) {
      return false;
    }
    return true;
}

export default handleValidation