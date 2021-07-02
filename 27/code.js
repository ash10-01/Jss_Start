const div=document.querySelector('.top');


function randm(){
  const rand=Math.random()*255;
  return Math.round(rand);
}
console.log(randm());

div.addEventListener('click',e=>{
if(e.target.classList.contains('btns'))
{e.target.classList.toggle('active');
setTimeout(()=>{
  e.target.classList.toggle('active');
},2000);
}

});

const but = document.querySelector('.button1')
 const tri=document.querySelector('.trigger')

but.addEventListener('click',e=>{
tri.classList.toggle('trigger')
});

const box=document.querySelector('.box');
setInterval(()=>{
  box.innerText=`${randm()}`
  box.style.backgroundColor=`rgb(${randm()},${randm()},${randm()})`;
},500);

const audio=document.querySelector('audio');
const slide=document.querySelector('.slider');
slide.addEventListener('mouseup',e=>{
  audio.volume=(slide.value)/100;
  localStorage.setItem('vol',audio.volume);
});




const mute = document.querySelector('.button2');
mute.addEventListener('click',e=>{
  if(audio.volume===0)
  {
    audio.volume=localStorage.getItem('vol');
  }else{
    audio.volume=0;
    }
  });

const moving= document.querySelector('.moving');
var i=1;
setInterval(()=>{
  if(i%2!==0)
  {
    moving.classList.remove('back1');
    moving.classList.add('back2');
    i++;
  }
  else
  {
    moving.classList.remove('back2');
    moving.classList.add('back1');
    i++;
  }

if(i>5000)i=1;
},5000);
