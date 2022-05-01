/**
 * 
Current Weather API Endpoint

http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
    
// optional parameters: 

    & units = m
    & language = en
    & callback = MY_CALLBACK
 */
const container = document.querySelector(".container");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");

fetch(`https://api.weatherstack.com/current?access_key=${'41947a4e61efe945bc735849649958b0'}&query=${'Manchester'}`)
.then((res)=>{
    return res.json();
}).then((data)=>{
    city.firstElementChild.innerHTML = data.location.name;
    country.firstElementChild.innerHTML = data.location.country;
    temp.firstElementChild.innerHTML = data.current.temperature;
})
