// Yoga With Farqaleet

document.addEventListener(“DOMContentLoaded”,()=>{

const links=document.querySelectorAll(‘nav a’);

links.forEach(link=>{ link.addEventListener(“click”,e=>{
e.preventDefault(); const
target=document.querySelector(link.getAttribute(“href”)); if(target){
target.scrollIntoView({behavior:“smooth”}); } }); });

const topBtn=document.createElement(“button”); topBtn.innerHTML=“↑”;
topBtn.id=“topBtn”; document.body.appendChild(topBtn);

Object.assign(topBtn.style,{ position:“fixed”, bottom:“20px”,
right:“20px”, width:“45px”, height:“45px”, borderRadius:“50%”,
border:“none”, cursor:“pointer”, display:“none”, fontSize:“20px” });

window.addEventListener(“scroll”,()=>{
topBtn.style.display=window.scrollY>300?“block”:“none”; });

topBtn.addEventListener(“click”,()=>{
window.scrollTo({top:0,behavior:“smooth”}); });

console.log(“Yoga With Farqaleet loaded.”);

});
