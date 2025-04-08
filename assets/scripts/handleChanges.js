const ContactFormIcon = document.getElementById("activateForm");
const hideBtn = document.getElementById("backIcon");
const formTag = document.getElementById("form");
const githubIcon = document.getElementById("githubIcon");
const footer = document.getElementById("footer");
const contactForm = document.getElementById("ContactForm");
ContactFormIcon.onclick = () =>{
    contactForm.style.display = "block";
    formTag.style.display = "flex";
    formTag.style.animation = "appear";
    formTag.style.animationDuration = "1s";
    formTag.style.animationFillMode = "forwards";

}
function addAnim(elem, anim){
    elem.onmouseover = ()=>{
        elem.classList.add(anim);
    }
    elem.onmouseout = () =>{
        elem.classList.remove(anim);
    }
  
}

window.addEventListener("keydown", (event)=>{
    if(event.key == "Escape"){
        formTag.style.animation = "disappear";
        formTag.style.animationDuration = "1s";
        formTag.style.animationFillMode = "forwards";
    }
   
})
hideBtn.onclick = ()=>{
    
    formTag.style.animation = "disappear";
    formTag.style.animationDuration = "1s";
    formTag.style.animationFillMode = "forwards";
}

addAnim(ContactFormIcon, "fa-bounce");
addAnim(githubIcon, "fa-bounce");
addAnim(hideBtn, "fa-bounce");