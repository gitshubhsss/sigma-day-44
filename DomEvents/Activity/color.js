let h1=document.querySelector('h1');
let btn=document.querySelector('button');
let box=document.querySelector('.box');

function rgbColor(){
    let red=Math.floor(Math.random() * 250) + 1;
    let green=Math.floor(Math.random() * 250) + 1;
    let blue=Math.floor(Math.random() * 250) + 1;
    return `rgb(${red},${green},${blue})`
}

btn.addEventListener("click",()=>{
    h1.innerText=rgbColor();
    box.style.backgroundColor=rgbColor();
})