

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//document.querySelector('html').onclick = function(){ alert('aaaaa') ;}

let myImage=document.querySelector('img');

myImage.onclick=function(){
  let mySrc=myImage.getAttribute('src')
  if(mySrc==='images/1.png'){
      myImage.setAttribute('src','images/2.png');
  }
  else{
      myImage.setAttribute('src','images/1.png');
  }
}










