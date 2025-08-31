function animateSvg(id1, id2, dur, restr){
    
   
    if(window.innerWidth>600||!restr){
        const tween = KUTE.fromTo(id1, {path:id1},{path:id2}, {repeat:999, duration:dur, yoyo:true})
        tween.start();
    }
}

    setTimeout(()=>{
        animateSvg("#bg1", "#bg2", 3000,true);
        
    },900)
    setTimeout(()=>{
        animateSvg(".bg11", ".bg21", 3000,false);
        
    },900)
        
    
        
    
    

