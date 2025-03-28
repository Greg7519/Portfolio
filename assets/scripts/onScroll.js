const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
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