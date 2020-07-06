//Current weather + windchill code
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f231a64fe0bf673894728e2e53615a71";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('desc').innerHTML = jsObject.weather[0].description;
        document.getElementById('currentTemp').textContent = jsObject.main.temp;
        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;
        var t = parseFloat(document.getElementById("currentTemp").innerHTML);
        var s = parseFloat(document.getElementById("windSpeed").innerHTML);
        var chill = 35.74 + .6215 * t - 35.75 * Math.pow(s, .16) +  .4275 * t * Math.pow(s, .16);
        if (t < 51 && s > 3) {
            document.getElementById("windChill").innerHTML = Math.round(chill);
        }
        else {
            document.getElementById("windChill").innerHTML = "N/A";
        }
    });

//Forecast Code
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=f231a64fe0bf673894728e2e53615a71';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 1;
        const foreCast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        foreCast.forEach(forecast => {
            let date = forecast.dt_txt;
            let d = new Date(date).getDay();
            let f = forecast.main.temp;
            const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            document.getElementById(`d${day}`).textContent = weekdays[d];
            document.getElementById(`tempD${day}`).textContent = Math.floor(f);
            document.getElementById(`img${day}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`img${day}`).setAttribute('src', icon);
            day++;
            d++;
        })
    });