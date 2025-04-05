var i =0;
var speed = 50;
function typewriter(text, element, customColor){
    var cursor= element.querySelector("#cursor");
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
            i=0;
            
        }
       
    }
}
const windowLoc =location.href.split("/").slice(-1)[0];
if(windowLoc == "about.html"){
    setTimeout(()=>{
     
          
        typewriter("Software engineer, Passionate about technology", document.getElementById("headerEng"),"#ff4400");
            
           
          
           
           
       
    },1300)
}
if(windowLoc == "index.html"){
    setTimeout(()=>{
     
          
        typewriter("Welcome to my page", document.getElementById("mainHeader"),"#1a1a1a ");
            
           
          
           
           
       
    },1300)
}

const observer = new IntersectionObserver((entries)=>{
        entries.forEach(async(entry) =>{
            
            if(entry.isIntersecting){
                
                    entry.target.classList.add("show")
                
                    
                
              
               
            
                
            }
            
        
        })
    })
    const hiddenEls = document.querySelectorAll(
        '.hidden'
    )
    hiddenEls.forEach((el)=>{
        setTimeout(()=>{
            observer.observe(el);
        },1000)
       
    })

