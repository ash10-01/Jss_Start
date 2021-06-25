const para=document.querySelectorAll('p');
para.forEach(item => {
  console.log(item.innerText);
  if(item.textContent.includes('green')){
    item.classList.add('greenbox');
  }
   else if (item.textContent.includes('red')) {
    item.classList.add('redbox');

  }
});
const h=document.querySelector('h1');
h.classList.add('redbox');
// h.classList.add('greenbox');
h.classList.toggle('redbox');
h.classList.toggle('redbox');
