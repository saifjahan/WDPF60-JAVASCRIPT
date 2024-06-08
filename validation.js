class validation {
    constructor(email){
        this.email = email;
    }

    validate(){
        var pattern = /[A-z0-9]+@[A-z0-9]+\.[A-z]{2,4}/;
        if(this.email == ""){
            alert("cannot be Empty");
        }
       else if(this.email.search(pattern)==1){
            alert("please Enter Valid Email Address");
        }else{
            alert("Valid E-mail Address");
        }
    }
}