let para=document.querySelector('#para')
count=1;
let btn=document.querySelector('button');

let onMouse=()=>{
      para.innerText=`you were on the button ${count} times`;
      count++;
       
 }
btn.onmouseenter=onMouse;





