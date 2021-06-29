const getTodo=(callback)=>{
  const request =new  XMLHttpRequest();
  request.addEventListener('readystatechange',()=>{

  if(request.readyState===4 && request.status==200){
  const data=JSON.parse(request.responseText)
  callback(undefined, data);
  }
  else if (request.readyState===4)
  callback('could not fetch data',undefined);
});
  request.open('GET','https://jsonplaceholder.typicode.com/posts/');
  request.send();
};
console.log(1);console.log(2);console.log(3);console.log(4);console.log(5);console.log(6);
getTodo((err,data)=>{
  console.log('callback fired');
  if(err)console.log(err);
  else console.log(data);
});
console.log(7);console.log(8);console.log(9);


const getSomething=(resolve,rejected)=>{}
