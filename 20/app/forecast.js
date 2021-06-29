const key='eXzGnQaDKCmdyOalSZAchEygTkaPTdGd';


// getcityinformation
const getCity= async(city)=>{
   const baseurl='http://dataservice.accuweather.com/locations/v1/cities/search';
   const query=`?apikey=${key}&q=${city}`;
   const response= await fetch(baseurl+query);
   const data =await response.json();
   return data[0];
};

 
const getWeather=async(citykey)=>{

const baseurl='http://dataservice.accuweather.com/currentconditions/v1/';
const query=`${citykey}?apikey=${key}`;
const response=await fetch(baseurl+query);
const data=await response.json();
return data[0];

};



// getCity('delhi').then(data=>{
//   console.log(data.Key);
//     return getWeather(data.Key);
//   }).then(data=>{
// console.log(data.Temperature);
// }).catch(err=>console.log(err));
