let img=document.querySelector('img');
img.classList.add("dom-img");

let boxes=document.querySelectorAll('.box');
for(i=0;i<boxes.length;i++){
    boxes[i].style.color="green";   
}
let box=document.querySelector(".box");
box.style.border="2px solid black"
box.style.width="200px";

