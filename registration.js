
document.getElementById("submit-button").addEventListener("click", function (e){    
    var ok= false;
    const mobileNumber = document.getElementById("mobile-number").value;
    let length = mobileNumber.length;
    if(valid){
        if(length == 10){
            let va = isNaN(mobileNumber);
            if(!va){
                ok=true;
            }
            else if(va){
                ok=false;
            }
        }
        else if(length <10 || length >10){
            alert("you'r mobile no is invalid");
        }
    }
    if(ok== false){
        e.preventDefault();
    }
})

var valid=false;
function dothis(){
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if(password === confirmPassword){
        document.getElementById("confirm-password-label").classList.add("change-border-to-green");
        document.getElementById("confirm-password-label").classList.remove("change-border-to-red");
        valid= true;
    }
    else if(password != confirmPassword){
        document.getElementById("confirm-password-label").classList.remove("change-border-to-green");
        document.getElementById("confirm-password-label").classList.add("change-border-to-red");
        valid= false;
    }
}

