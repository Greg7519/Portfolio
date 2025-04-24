const firstName = document.getElementById("fname")
const email= document.getElementById("email")
const message = document.getElementById("subject")
const submitBtn = document.getElementById("submitBtn")
function sendMail(){
    var templateParams = {
        name:firstName.value,
        email:email.value,
        subject:message.value

    }
    emailjs.send("service_qsoo8qp","template_ajjlfbg", templateParams)
}

submitBtn.onclick = (e)=>{
    sendMail()
    e.preventDefault()
    firstName.value = "";
    email.value = ""
    message.value=""
}