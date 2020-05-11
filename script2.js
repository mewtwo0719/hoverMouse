var body = document.querySelector("BODY");
var img = document.getElementsByClassName("image");
var ind = 0;
var canSpam = true;
var spamRate = 2;
var spam = 0;
var pointer = document.getElementById("pointer");
var posX;
var posY;

body.addEventListener('mousemove', function(){
    spam++;
    var e = window.event;

    posX = e.clientX;
    posY = e.clientY;
    pointer.style.left = posX-20+"px";
    pointer.style.top = posY-20+"px";
    if(spam%spamRate != 0) return;

    img[ind].classList.remove("hidden");
    img[ind].classList.add("apear");

    var op = ind;

    setTimeout(function(){  img[op].classList.remove("apear")
                            img[op].classList.add("vanish"); }, 1000);
    setTimeout(function(){  img[op].classList.remove("vanish")
                            img[op].classList.add("hidden"); }, 2000);
    
                            
                        
                        img[op].style.left = posX-50+"px";               
                        img[op].style.top = posY-50+"px";

    
    ind++;
    if(ind == img.length) ind = 0;
}
)


