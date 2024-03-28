let para=document.querySelector('#para');
let btns=document.querySelectorAll('#btn');
let count=1;
for(i=0;i<btns.length;i++){
    // btns[i].addEventListener("click",function (){
    //     para.innerText=`button has clicked ${count} times`;
    //     count++;
    // });

    btns[i].addEventListener("dblclick",function (){
        para.innerText=`button has clicked ${count} times`;
        count++;
    });
}
