document.body.style.overflowY = 'hidden';


                setTimeout(()=>{
                        if(windowLoc == "index.html" || windowLoc == ""){
                                if(window.innerWidth>768 ){
                                        drawEarth().then(async()=>{
                                     
                                               
                                               
                                                        document.body.style.overflowY = 'visible';
                                                       
                                                      
                                                
                                                        
                                                
                                               
                                               
                                                
                                              
                                                
                                               
                                                
                                        })
                                }
                                else{
                                        document.body.style.overflowY = 'visible';
                                                this.document.getElementsByClassName("preloader")[0].classList.add(
                                                        "goUp"
                                                );
                                                setTimeout(()=>{
                                                        document.body.style.overflowY = 'visible';
                                                        this.document.getElementsByClassName("preloader")[0].style.display = "none";
                                                },1000)
                                                
                                }
                               
                        }
                        
                        else{
                                this.document.getElementsByClassName("preloader")[0].classList.add(
                                        "goUp"
                                );
                               
                                setTimeout(()=>{
                                        document.body.style.overflowY = 'visible';
                                        this.document.getElementsByClassName("preloader")[0].style.display = "none";
                                },1000)
                               
                        }
                       
                       
        
                },1000)
               
        
                
             
            
           
        

