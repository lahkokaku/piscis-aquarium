let contactForm = document.getElementById("contact");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById("contact-form-name");
    let email = document.getElementById("contact-form-email");
    let phonenum = document.getElementById("contact-form-phonenum");
    let gender = document.getElementsByName("gender");
    let message = document.getElementById("contact-form-message");

    let nameError = document.getElementById("error-form-name");
    let emailError = document.getElementById("error-form-email");
    let phonenumError = document.getElementById("error-form-phonenum");
    let genderError = document.getElementById("error-form-gender");
    let messageError = document.getElementById("error-form-message");

    let flag = 0;
    if(name.value === "" || name.value == null){
        nameError.innerHTML = "Name must be filled!";
        flag = 1;
    }else{
        nameError.innerHTML = "";
    }

    if(email.value === "" || email.value == null){
        emailError.innerHTML = "Email must be filled!";
        flag = 1;
    }else{
        emailError.innerHTML = "";
    }

    if(phonenum.value === "" || phonenum.value == null){
        phonenumError.innerHTML = "Phone Number must be filled!";
        flag = 1;
    }else{
        phonenumError.innerHTML = "";
    }

    let radioFlag = 0
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked) radioFlag = 1; 
    }
    if(radioFlag == 0){
        genderError.innerHTML = "Gender must be filled!";
        flag = 1;
    }else{
        genderError.innerHTML = "";
    }
    
    if(message.value === "" || message.value == null){
        messageError.innerHTML = "Message must be filled!";
        flag = 1;
    }else{
        messageError.innerHTML = "";
    }

    if(flag === 1){
        alert('Error encountered please check the form for unmet criterias.');
    }else{
        alert("Message sent! We'll get back to you soon.");
        name.value = '';
        email.value = '';
        phonenum.value = '';
        for(let i = 0; i < gender.length; i++){
            gender[i].checked = false; 
        }
        message.value = '';
    }
})