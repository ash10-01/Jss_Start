// localStorage.setItem('name','mario');
// localStorage.setItem('age',55);
// localStorage.setItem('petname','Luigi');
//
// const name=localStorage.getItem('name');
// localStorage.removeItem('petname');
// // localStorage.clear();
// console.log(name);
localStorage.clear();


const list =[
  {name:'Ashish',age :22},{name:'Anand',age :19},{name:'Ambily',age :46}
];
console.log(JSON.stringify(list));
localStorage.setItem('list',JSON.stringify(list));
const store=JSON.stringify(list);

console.log(store);
