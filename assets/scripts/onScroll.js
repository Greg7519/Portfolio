

const windowLoc =location.href.split("/").slice(-1)[0];
console.log(windowLoc);
if(windowLoc == "about.html" || windowLoc == "about"){
    setTimeout(async()=>{
     
        
       await typewriter("Software engineer, Passionate about technology", document.getElementById("headerEng"),"#ff4400");
            
           
          
           
           
       
    },1250)
}
if(windowLoc == "index.html" || windowLoc == ""){
    setTimeout(async()=>{
     
          
       await typewriter("Welcome to my page", document.getElementById("mainHeader"),"#1a1a1a ");
            
           
          
           
           
       
    },1300)
}

const observer = new IntersectionObserver((entries)=>{
        entries.forEach(async(entry) =>{
            
            if(entry.isIntersecting){
                if(entry.target.classList.contains("rightAnim")){
                    entry.target.classList.remove("hidden")
                    entry.target.classList.add("fadeInRightEnd");
                    
                }
                else if(entry.target.classList.contains("leftAnim")){
                    entry.target.classList.remove("hidden")
                    
                    entry.target.classList.add("fadeInLeftEnd");
                    
                    

                }
                // else if(entry.target.classList.contains("bottomAnim")){
                //     entry.target.classList.remove("hidden")
                //     entry.target.classList.add("fadeInBottomEnd");

                // }
                else{
                    entry.target.classList.add("show")
                
                }
                 
                    
                
              
               
            
                
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

