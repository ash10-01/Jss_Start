const form=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details')
const time=document.querySelector('img.image');
const icon=document.querySelector('img.icon');


// udateui
const updateui=(data)=>{

const citydet=data.citydetails;
const  wthe=data.weather;
details.innerHTML=`<h3>${citydet.EnglishName}</h3>
<h4>${wthe.WeatherText}</h4>
<div class="temp">
  <span>${wthe.Temperature.Metric.Value}&deg;C</span></div>`;

let timesrc=null;
const iconsrc=`img/icons/${wthe.WeatherIcon}.svg`
icon.setAttribute('src',iconsrc);
if(wthe.IsDayTime){
  timesrc='img/day.svg';
}else {
  timesrc='img/night.svg';
}
time.setAttribute('src',timesrc);

  if(card.classList.contains('disnone'))
  card.classList.remove('disnone');

}



// udateciyt
const updatecity=async(city)=>{

const citydetails=await getCity(city);
const weather=await getWeather(citydetails.Key);


localStorage.setItem('city',city);
return({citydetails, weather});

}


// eventlistner
form.addEventListener('submit',e=>{

e.preventDefault();
const city=form.city.value.trim();
form.reset();

updatecity(city).then(data=>{
  updateui(data);

// setinguplocalStorage

});

});



if(localStorage.getItem('city'))
{
  updatecity(localStorage.getItem('city')).then(data=>{
  updateui(data);});
}
////////////////////////////////////////////////////////////////////////////////////
