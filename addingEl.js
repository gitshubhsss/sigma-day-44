let newBtn=document.createElement('button');
newBtn.innerText="submit";
let body=document.querySelector('body');
body.prepend(newBtn)

let para=document.createElement("p");
para.innerText="creating the element using create element";
let box=document.querySelector('.box');
box.prepend(para)

let newInput=document.createElement("input");
newInput.innerHTML=" <input type='text'>";

box.insertAdjacentElement('beforebegin',newInput)

let newTeam=document.createElement("li");
newTeam.innerText="PUNE";
let UlList=document.querySelector('ul');

UlList.insertAdjacentElement('afterbegin',newTeam)

// UlList.removeChild(newTeam);
