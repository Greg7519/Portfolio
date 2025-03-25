
const bgImgs = document.querySelectorAll(".bgImg");
var len = bgImgs.length;
var bgImgsArr = Array.from(bgImgs);
var waitLen =0;
for(var bgImg of bgImgsArr){

        waitLen++;
    
    if(waitLen == len){
        const preloader =document.getElementsByClassName("preloader");
        preloader[0].style.display = "none";
    }
}