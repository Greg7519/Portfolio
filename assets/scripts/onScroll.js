

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

