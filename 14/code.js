const v=document.querySelector('.atd');

const ul=document.querySelector('ul.things');

function add(t){
  const html=`<li class="cards">${t}<i class="fa fa-trash" aria-hidden="true"></i></li>`;
  ul.innerHTML+=html;

}

v.addEventListener('submit', e =>{

    e.preventDefault();
    const t=v.df.value.trim();
    console.log(t);
    add(t);
    v.reset();
  });

// Remove
  ul.addEventListener('click',e=>{
  if(e.target.classList.contains('fa-trash'))
  {
    e.target.parentElement.remove();
  }
  });
