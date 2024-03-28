//add paragraph with red text which says hellow am red
let newP=document.createElement('p');
newP.innerText="Hey am red";
newP.style.color="red";

let body=document.querySelector('body');
body.appendChild(newP)