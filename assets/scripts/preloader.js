document.body.style.overflowY = 'hidden';
if(window.scrollY!=0){
        document.body.style.overflowY = 'visible';
        this.document.getElementsByClassName("preloader")[0].style.display = "none";
        this.document.getElementsByClassName("preloader")[0].classList.add(
                "goUp"
        );
}
else{
        window.onload = function(){
                setTimeout(()=>{
                        this.document.getElementsByClassName("preloader")[0].classList.add(
                                "goUp"
                        );
                        document.body.style.overflowY = 'visible';
                        setTimeout(()=>{
                                this.document.getElementsByClassName("preloader")[0].style.display = "none";
                        },1000)
        
                },1000)
               
             
            
           
        }
}
