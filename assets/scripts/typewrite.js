var i =0;
var speed = 50;
function typewriter(text, element){
    if(i<text.length){
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => {typewriter(text,element)}, speed);
    }
    
  
   
}
window.onload = () =>{
    
}
setTimeout(()=>{
    typewriter("Software engineer, Passionate about technology", document.getElementById("headerEng"))
},1000)

// export function typewriter(text, element){
//     if(i<text.length){
//         element.innerHTML += text.charAt(i);
//         i++;
//         setTimeout(() => {typewriter(text,element)}, speed);
//     }
    
  
   
// }
