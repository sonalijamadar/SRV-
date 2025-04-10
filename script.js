
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var state = document.Form.state.value;
    var city = document.Form.city.value;
    var work = document.Form.work.value;

    

    var nameErr = emailErr = mobileErr = stateErr = cityErr = workErr =  true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    

    if(state == "Select") {
        printError("stateErr", "Please select your country");
        var elem = document.getElementById("state");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("stateErr", "");
        stateErr = false;
        var elem = document.getElementById("state");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }


    if(city == "Select") {
        printError("cityErr", "Please select your country");
        var elem = document.getElementById("city");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("cityErr", "");
        cityErr = false;
        var elem = document.getElementById("city");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    

    if(work == "Select") {
        printError("workErr", "Please select your country");
        var elem = document.getElementById("work");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("workErr", "");
        workErr = false;
        var elem = document.getElementById("work");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }

    
    
    if((nameErr || emailErr || mobileErr || stateErr || cityErr || workErr ) == true) {
       return false;
    } 
};