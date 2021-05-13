

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName=prompt('input name');
    if(!myName || myName===null){
         setUserName();
}
    localStorage.setItem('name',myName);
    myHeading.textContent = 'sksksksks,'+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent='sksksksks,'+storedName;
}

myButton.onclick=function(){
    setUserName();
}