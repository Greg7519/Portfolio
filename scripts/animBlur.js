const blurEls = document.querySelectorAll(".blurAnim");
const btns = document.querySelectorAll(".visitBtn");
for(const btn of btns){
   
    btn.onmouseover = function(){
        var parent = btn.parentElement;
        var bgImg = parent.previousElementSibling;
        bgImg.classList.remove("blurAnim")
        bgImg.classList.add("blurClear");
    }
    btn.onmouseout = function(){
        var parent = btn.parentElement;
        var bgImg = parent.previousElementSibling;
        bgImg.classList.remove("blurClear");
        bgImg.classList.add("blurAnim")
     

    }
}