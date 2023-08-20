
setInterval(()=>{
  let date=new Date();
  let hrs= date.getHours();
  let hours = document.getElementById("hrs");
  hours.innerHTML=hrs;
 

let minutes =document.getElementById("Min");
minutes.innerHTML=date.getMinutes();

let seconds = document.getElementById("Sec");
 seconds.innerHTML =date.getSeconds();

 let ampm=(hrs>=12)?"PM":"AM";
 let session = document.getElementById('prd-2');
  
session.innerHTML= ampm


},1000)

