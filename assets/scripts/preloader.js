document.body.style.overflowY = 'hidden';


                setTimeout(()=>{
                        if(windowLoc == "index.html" || windowLoc == ""){
                                drawEarth().then(()=>{
                                     
                                        document.body.style.overflowY = 'visible';
                                        this.document.getElementsByClassName("preloader")[0].classList.add(
                                                "goUp"
                                        );
                                      
                                        
                                       
                                        
                                })
                        }
                        else{
                                this.document.getElementsByClassName("preloader")[0].classList.add(
                                        "goUp"
                                );
                               
                                setTimeout(()=>{
                                        document.body.style.overflowY = 'visible';
                                        
                                },1000)
                                
                        }
                       
                       
        
                },1000)
               
        
                
             
            
           
        

