const bounceElems = document.getElementsByClassName("bounceTxt");
var counter = 0;
function addBouncingAnim(bounceElems){
    for(var i=0; i<bounceElems.length;i++){
        var htmlCont = (bounceElems[i].textContent).trim();
        var animationDelay = 0.02;
        var animDuration = animationDelay *htmlCont.length;
        bounceElems[i].innerHTML = "";
        // bounceElems[i].style.animation = "bounce .8s ease infinite alternate";
        for(var j=0; j<htmlCont.length;j++){
            const spanEl = document.createElement("span");
            spanEl.style.animation = "bounce 0.5s ease infinite alternate";
            spanEl.style.animationDelay = animationDelay + "s";
            if(htmlCont.charAt(j)=== " "){
                spanEl.innerHTML = "&nbsp;";
            }
            else{
                spanEl.innerHTML = htmlCont.charAt(j);
            }
            
            animationDelay+=0.02;
            bounceElems[i].appendChild(spanEl);
            
        }
     
    }

}
if(window.innerWidth>600){
    addBouncingAnim(bounceElems);
}
