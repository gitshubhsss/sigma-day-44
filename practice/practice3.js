// a <div> with a black border and pink background color with the following elements inside of it :
//  1: another <h1> that says I am in div
//  2: a <p>that says "MEE TOO!"
let div=document.createElement('div');
let h1=document.createElement('h1');
let p=document.createElement('p');

h1.innerText="I am in div";
p.innerText="MEE TOO";

let body=document.querySelector('body');
body.append(div);

div.append(h1)
div.append(p);

div.classList.add('box')