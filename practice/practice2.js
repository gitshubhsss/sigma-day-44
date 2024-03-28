//an <h3> with blue text that says am blue h3

let h3=document.createElement("h3");
h3.innerText="I'am a blue h3";
h3.style.color="blue"

let body=document.querySelector('body');
body.appendChild(h3)