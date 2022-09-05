let city = document.querySelector('.city');
let temperature = document.querySelector('.temp');
let des = document.querySelector('.description');
let Humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind');
let button = document.querySelector(".search button");
let searchBar = document.querySelector(".search-bar");
let weather = {
    apiKey: "8625325b9515d6061ceb050804927337",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city
         +"&units=metric&appid="
         +this.apiKey
         )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name}= data;
        const {icon,description} = data.weather[0];
        const {speed}= data.wind;
        const {temp,humidity} = data.main;
        console.log(name,icon,description,speed,humidity,icon);
        city.innerText ="Weather in " + name; 
        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        temperature.innerText = temp +"°C";
        des.innerText = description;
        Humidity.innerText = `Humidity is : ${humidity}`;
        windSpeed.innerText = `Wind speed is : ${speed} km/h`;
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/featured/1920x1080/?"+name+"')"
    },
    search: function(){
        this.fetchWeather(searchBar.value);
    }
};

button.addEventListener('click',function(){
    weather.search();
})
searchBar.addEventListener('keyup',(event) => {
        if (event.key == "Enter") {
            weather.search();
        }
    });
    
weather.fetchWeather('Tongi');