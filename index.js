n=document.querySelectorAll(".drum").length;
for (var index = 0; index < n; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",myclick);   
}

function myclick() {
    addAnimation(this.innerHTML);
    var a=new Audio("sounds/"+this.innerHTML+".mp3");
    a.play();
}

document.addEventListener("keydown",function(event){
    addAnimation(event.key);
    var a=new Audio("sounds/"+event.key+".mp3");
    a.play();}
);

function addAnimation(currentKey){
    var activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 300);
}