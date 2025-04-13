function animateSvg(id1, id2, dur){
    
    const tween = KUTE.fromTo(id1, {path:id1},{path:id2}, {repeat:999, duration:dur, yoyo:true})
    tween.start();
}
if(window.innerWidth>600){
    setTimeout(()=>{
        animateSvg("#bg1", "#bg2", 3000);
    },900)
        
    
        
    
    
}
