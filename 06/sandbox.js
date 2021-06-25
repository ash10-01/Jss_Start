const para=document.querySelectorAll('p');
console.log(para);
para.forEach((item, i) => {
  console.log(item);
  item.innerText+='  YOO';
});
// para[0].color='red';;
const getid =document.getElementById('first');
getid.innerText="Lorem Ipsum";


const getclass=document.getElementsByClassName('error');
console.log(getclass);


const inside=document.querySelector('div.error');
console.log(inside.innerHTML);

const igh=document.querySelector('a');
console.log(igh.getAttribute('href'));
igh.setAttribute('target','_blank');

const pa=document.querySelector('p');
pa.setAttribute('style','color:red');

const par=document.querySelector('p#second');
console.log(par.style);
par.style.color='orange';
