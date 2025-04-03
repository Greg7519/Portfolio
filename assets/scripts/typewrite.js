
    
var i =0;
var speed = 50;

function typewriter(text, element){

    if(i<text.length ){
        var cursor= document.getElementById("cursor");
        if(i%2 != 0){
           if(cursor!=undefined){

            cursor.innerHTML = "|"
            cursor.style.color = "rgb(255, 68, 0)";
            cursor.style.width = "1px";
            cursor.style.position = "absolute";
            cursor.style.right = "-2px";
            cursor.style.bottom = "0px";
            cursor.style.transition = "all 1s";
            cursor.style.opacity = "1";
           }
          
           element.innerHTML += text.charAt(i);
          
        }
        else{
            // cursor.style.opacity = "0";
           
            element.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(() => {typewriter(text,element)}, speed);
        return i;
    }
    else{
        cursor.style.display = "none";
    }
}


  
    setTimeout(()=>{
     

             typewriter("Software engineer, Passionate about technology", document.getElementById("headerEng"))
        
       
      
       
       
   
},1200)






  



// export function typewriter(text, element){
//     if(i<text.length){
//         element.innerHTML += text.charAt(i);
//         i++;
//         setTimeout(() => {typewriter(text,element)}, speed);
//     }
    
  
   
// }
