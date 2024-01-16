





let today = dayjs();
$('#ct').text(today.format('MMM D, YYYY'));


 
let textarea1 = document.querySelector(".past1")
window.addEventListener("load", () => {
  let name = document.querySelector('#hour-9');
  let username = localStorage.getItem("past") || "";
  name.value = username;
  textarea1.textContent = username;
  name.addEventListener("change", (e) =>{
    localStorage.setItem("past", e.target.value);




  window.addEventListener("load", () => {
   
  })
})})

 
let textarea4 = document.querySelector(".past4")
window.addEventListener("load", () => {
  let name = document.querySelector('#hour-12');
  let username = localStorage.getItem("BB") || "";
  name.value = username;
  textarea4.textContent = username;
  name.addEventListener("change", (e) =>{
    localStorage.setItem("BB", e.target.value);




  window.addEventListener("load", () => {
   
  })
})})

 
 






let textarea2 = document.querySelector(".past2")


window.addEventListener("load", () => {
  let name = document.querySelector('#hour-10');
  let username = localStorage.getItem("p") || "";


  name.value = username;
  textarea2.textContent = username;
  name.addEventListener("change", (e) =>{
    localStorage.setItem("p", e.target.value);
  })
})




let textarea3 = document.querySelector(".past3")
window.addEventListener("load", () => {
  let name = document.querySelector('.past3');
  let username = localStorage.getItem("f") || "";


  name.value = username;
  textarea3.textContent = username;
  name.addEventListener("change", (e) =>{
   window.localStorage.setItem("f", e.target.value);
  })
})


let textarea5 = document.querySelector(".past5")
window.addEventListener("load", () => {
  let name = document.querySelector('.past5');
  let username = localStorage.getItem("CC") || "";


  name.value = username;
  textarea3.textContent = username;
  name.addEventListener("change", (e) =>{
   window.localStorage.setItem("CC", e.target.value);
  })
})


let textarea6 = document.querySelector(".past6")
window.addEventListener("load", () => {
  let name = document.querySelector('.past6');
  let username = localStorage.getItem("DD") || "";


  name.value = username;
  textarea3.textContent = username;
  name.addEventListener("change", (e) =>{
   window.localStorage.setItem("DD", e.target.value);
  })
})

let textarea7 = document.querySelector(".past7")
window.addEventListener("load", () => {
  let name = document.querySelector('.past7');
  let username = localStorage.getItem("EE") || "";


  name.value = username;
  textarea3.textContent = username;
  name.addEventListener("change", (e) =>{
   window.localStorage.setItem("EE", e.target.value);
  })
})


let textarea8 = document.querySelector(".past8")
window.addEventListener("load", () => {
  let name = document.querySelector('.past8');
  let username = localStorage.getItem("FF") || "";


  name.value = username;
  textarea3.textContent = username;
  name.addEventListener("change", (e) =>{
   window.localStorage.setItem("FF", e.target.value);
  })
})


let textarea9 = document.querySelector(".past9")
window.addEventListener("load", () => {
  let name = document.querySelector('.past9');
  let username = localStorage.getItem("GG") || "";


  name.value = username;
  textarea3.textContent = username;
  name.addEventListener("change", (e) =>{
   window.localStorage.setItem("GG", e.target.value);
  })
})

function addDay(){
 $('#hour-9').each(function () {
const d = new Date();
const h = d.getHours(); 
let newBlock = document.querySelector("#hour-9")
let newBlock2 = document.querySelector("#hour-10")
let newBlock3 = document.querySelector("#hour-11")
let newBlock4 = document.querySelector("#hour-12")
let newBlock5 = document.querySelector("#hour-13")
let newBlock6 = document.querySelector("#hour-14")
let newBlock7 = document.querySelector("#hour-15")
let newBlock8 = document.querySelector("#hour-16")
let newBlock9 = document.querySelector("#hour-17")
if(h === 9) {
    newBlock.className = ("row time-block present")}
 else if (h > 8) {newBlock.className = ("row time-block past")} 
 else if (h < 8) {newBlock.className = ("row time-block future")}   
 
 if(h === 10) {
    newBlock2.className = ("row time-block present")}
  else if (h > 9){newBlock2.className = ("row time-block past")}
  else if (h <= 9){newBlock2.className = ("row time-block future")}
  

  if(h === 11) {
    newBlock3.className = ("row time-block present")}
  else if (h > 10){newBlock3.className = ("row time-block past")}
 else if (h <= 10){newBlock3.className = ("row time-block future")}
 

 if(h === 12) {
  newBlock4.className = ("row time-block present")}
else if (h > 11){newBlock4.className = ("row time-block past")}
else if (h <= 11){newBlock4.className = ("row time-block future")}
  

if(h === 13) {
  newBlock5.className = ("row time-block present")}
else if (h > 12){newBlock5.className = ("row time-block past")}
else if (h <= 12){newBlock5.className = ("row time-block future")}


if(h === 14) {
  newBlock6.className = ("row time-block present")}
else if (h > 13){newBlock6.className = ("row time-block past")}
else if (h <= 13){newBlock6.className = ("row time-block future")}


if(h === 15) {
  newBlock7.className = ("row time-block present")}
else if (h > 14){newBlock7.className = ("row time-block past")}
else if (h <= 14){newBlock7.className = ("row time-block future")}


if(h === 16) {
  newBlock8.className = ("row time-block present")}
else if (h > 15){newBlock8.className = ("row time-block past")}
else if (h <= 15){newBlock8.className = ("row time-block future")}


if(h === 17) {
  newBlock9.className = ("row time-block present")}
else if (h > 18){newBlock9.className = ("row time-block past")}
else if (h <= 18){newBlock9.className = ("row time-block future")}




} 


 )}
  setInterval(addDay, 100)




































  
















