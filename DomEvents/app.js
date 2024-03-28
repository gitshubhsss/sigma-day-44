let para=document.querySelector("#para");
counter=1;
let btns=document.querySelectorAll('#btn')//there are four buttons in the html

for(i=0;i<btns.length;i++){
    btns[i].onclick=print;
}

function print(){
    para.innerText=`button has clicked ${counter} times `;
    counter ++;
    //here we have declared the funtion which sets the text to <p> and count that how many times
    //the button has clicked
}


