const correct=['A','B','A','A']
const form= document.querySelector('form');
const div=document.querySelector('div.result');
form.addEventListener('submit',e=>{
e.preventDefault();
let score=0;
const ans=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
ans.forEach((item, i) =>{
    if(item==correct[i])
    score=score+25;
  });
  scrollTo(0,0);

  div.style.display='block';
  let output=0;
  const timer= setInterval(()=>{
    document.querySelector('span').innerText=`${output}%`;
    if(output===score) clearInterval(timer);
    else  output++;
  },10);
});
