const ContactFormIcon = document.getElementById("activateForm");
const formTag = document.getElementById("form");
const githubIcon = document.getElementById("githubIcon");
const footer = document.getElementById("footer");
const contactForm = document.getElementById("ContactForm");
ContactFormIcon.onclick = () =>{
    contactForm.style.display = "block";
    formTag.style.display = "flex";

}
function addAnim(elem, anim){
    elem.onmouseover = ()=>{
        elem.classList.add(anim);
    }
    elem.onmouseout = () =>{
        elem.classList.remove(anim);
    }
  
}
addAnim(ContactFormIcon, "fa-bounce");
addAnim(githubIcon, "fa-bounce");