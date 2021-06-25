const div=document.querySelector('div');
const h1= document.querySelector('h1')
div.addEventListener('mousemove',e=>{
  h1.textContent=`X-${e.offsetX}  Y-${e.offsetY}`;
})
