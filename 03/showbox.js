console.log(1);
// global aand local scope
let age=22;
if(true){
let  age=34;
  console.log(`age is ${age}`);
}
console.log(`age is ${age}`);

let i=22;
if(true){
i=34;
  console.log(`age is ${i}`);
}
console.log(`age is ${i}`);
if(true){
let  i=55;
var j=33;
  console.log(`age is ${i}`);
}
console.log(`age is ${i}`);
console.log(j);
