
    
var i =0;
var speed = 50;

function typewriter(text, element, customColor){
    var cursor= document.getElementById("cursor");
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
        cursor.style.display = "none";
    }
}

setTimeout(()=>{
     
          
     typewriter("Software engineer, Passionate about technology", document.getElementById("headerEng"),"#ff4400");
        
       
      
       
       
   
},1200)





  


