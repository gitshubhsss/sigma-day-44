// a <div> with a black border and pink background color with the following elements inside of it :
//  1: another <h1> that says I am in div
//  2: a <p>that says "MEE TOO!"

let div=document.createElement('div');
div.style.border="2px solid black";
div.style.backgroundColor="pink";

let body=document.querySelector('body');
body.appendChild(div);

let h1=document.createElement('h1');
h1.innerText="I am in div";
div.insertAdjacentElement('afterbegin',h1)

let p=document.createElement('p');
p.innerText="MEE TOO!";

div.insertAdjacentElement('beforeend',p)

