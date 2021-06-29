const form =document.querySelector('form');
const username =document.querySelector('#username');
 const pattern=/[a-z]{8}/
form.addEventListener('submit', e=>{ e.preventDefault();
 console.log(form.username.value);
  });
// let username='shone';

//
// console.log(pattern.test(username));
// livefeedback
username.addEventListener('keyup',e=>{
  if(pattern.test(e.target.value))
  {
    username.setAttribute('class','greenbox')}
  else{
    username.setAttribute('class','redbox')
  }
  })
