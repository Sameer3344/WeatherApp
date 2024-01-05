const url = "https://api.weatherapi.com/v1/current.json?key=6410bc86df6e4ee1bb995722240401&q=";
// const key = '6410bc86df6e4ee1bb995722240401';
const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
		const  weatherIcon = document.querySelector(".weather-icon"); 
	
		

const api = async(city)=>{
const res = await fetch(url + city);
let data = await res.json();
console.log(data);

	document.querySelector(".City").innerHTML = data.location.name;
	   document.querySelector(".temp").innerHTML =Math.round(data.current.temp_c) + '°c';
	   document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
	   document.querySelector(".wind-speed").innerHTML = data.current.wind_kph + ' km/h';
	   if(data.current.condition.text == "Clouds"){
		weatherIcon.src="weather-app-img/clouds.png";
	   }
	   else if(data.current.condition.text == "Snow"){
		weatherIcon.src="weather-app-img/snow.png";
	   }
	   
	   else if(data.current.condition.text == "Rain"){
		weatherIcon.src="weather-app-img/rain.png";
	   }
	   
	   else if(data.current.condition.text == "Wind"){
		weatherIcon.src="weather-app-img/wind.png";
	   }
	   else if(data.current.condition.text == "Mist"){
		weatherIcon.src="weather-app-img/mist.png";
	   }
	   else if(data.current.condition.text == "Drizzle"){
		weatherIcon.src="weather-app-img/drizzle.png";
	   }
	   else if(data.current.condition.text == "Sunny"){
		weatherIcon.src="weather-app-img/clear.png";
	   }
	   document.querySelector(".weather").style.display="block";


}
searchBtn.addEventListener("click",()=>{
	api(searchBox.value);

})