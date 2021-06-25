console.log(1);
function greet(){
  console.log("hellow world");
}
greet();
const speak=function(name ='luigi'){console.log(`good morning ${name}`);};
speak('arrrow');


const calarea=function(r=1){
  return(3.14*r**2)
};
let a=calarea(3);
console.log(a);

const vol=(r=2)=>r**3;
console.log(vol());

const kel=()=>console.log("hellow");
kel();

const list=['ashish','santhosh','jacob','age']

list.forEach(itemextractor);

function itemextractor(item) {
  console.log(item);
}
const itemextractor2=(item, i) => {
  console.log(item);
};

list.forEach(itemextractor2);

list.forEach(function itemextractor3(item) {
  console.log(item);
});
