const bounceElems = document.getElementsByClassName("bounceTxt");
var counter = 0;

    
var i =0;
var speed = 50;

window.typewriter = async function typewriter(text, element, customColor){
    try{
        var cursor= element.querySelector("#cursor");
    }
    catch{
        
    }
   
    if(i<text.length ){
      
        if(i%2 != 0){
           if(cursor!=undefined){

            cursor.innerHTML = "|"
            cursor.style.color = customColor;
            cursor.style.position = "absolute";
            cursor.style.right = "-2px";
            cursor.style.bottom = "0px";
            cursor.style.transition = "all 1s";
            cursor.style.opacity = "1";
           }
          
           element.innerHTML += text.charAt(i);
          
        }
        else{
            // setTimeout(()=>{
            //     cursor.style.opacity = "0";
            // },100)
            
           
            element.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(() => {typewriter(text,element,customColor)}, speed);
        
    }
    else{
        if(cursor!=undefined){
            cursor.style.display = "none";
        }
       
    }
}





  



function addBouncingAnim(bounceElems,text){
    for(var i=0; i<bounceElems.length;i++){
        var htmlCont = text;
        var animationDelay = 0.02;
        var animDuration = animationDelay *htmlCont.length;
        bounceElems[i].innerHTML = "";
        // bounceElems[i].style.animation = "bounce .8s ease infinite alternate";
        for(var j=0; j<htmlCont.length;j++){
            const spanEl = document.createElement("span");
            spanEl.style.animation
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
if(window.innerWidth<600){
    bounceElems[0].innerHTML =  "Building the technologies of tomorrow";
    
}
else{
    addBouncingAnim(bounceElems, "Building the technologies of tomorrow");
}
