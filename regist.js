function validateData() {
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    let cpass=document.getElementById("cpass");
    let fgender=document.getElementById("fgender");
    let mgender=document.getElementById("mgender");
    let cb=document.getElementById("cb");
    let dobString = document.getElementById("dob").value;
    let dob = new Date(dobString);
    let curDate = new Date();

    if(name.value == ""){
        alert("Name must not be Empty");
    }else if(name.value.length<5) {
        alert("Name length must be at least 5 characters");
    }else if(email.value == ""){
        alert("Email must not be Empty");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must be ends with @gmail.com");
    }else if(pass == ""){
        alert("Password must not be Empty");
    }
    else if(!checkAlphaNum(pass.value)) {
        alert("Password must be alphanumeric");
    }else if(cpass.value == ""){
        alert("Confirm your password");
    }
    else if(cpass.value!=pass.value) {
        alert("Confirm Password must be the same as Password");
    }
    else if(!fgender.checked&&!mgender.checked) {
        alert("Gender must be selected");
    }
    else if(dobString == "") {
        alert("Date of Birth must be selected");
    }
    else if (dob.getTime() >curDate.getTime()) {
        alert("The Date Birth must not be later than today's date")
    }
    else if(!cb.checked){
        alert("Agreement must be checked");
    }
    else{
        alert("Registration Success");
    }
}

function checkAlphaNum(pass) {
    var isAlpha=false;
    var isNum=false;
    for (let i=0; i<pass.length; i++) {
        if (isNaN(pass[i])) {
            isAlpha=true;
        }
        else{
            isNum=true;
        }
        if (isAlpha&&isNum) {
            return true;
        }
        
    }
    return false;
}