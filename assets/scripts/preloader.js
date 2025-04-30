document.body.style.overflowY = 'hidden';


                setTimeout(()=>{
                       
                        drawEarth().then(()=>{
                                this.document.getElementsByClassName("preloader")[0].classList.add(
                                        "goUp"
                                );
                                // document.body.style.overflowY = 'visible';
                              
                                this.document.getElementsByClassName("preloader")[0].style.display = "none";
                                
                        })
                       
        
                },1000)
               
        
                
             
            
           
        

