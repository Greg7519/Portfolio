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
    emailjs.send("service_hv5w7ib","template_qed489a", templateParams)
}

submitBtn.onclick = (e)=>{
    sendMail()
    e.preventDefault()
}