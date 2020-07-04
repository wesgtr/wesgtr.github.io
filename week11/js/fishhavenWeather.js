//Current weather + windchill code
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0381059&lon=-111.4005351&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
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
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0381059&lon=-111.4005351&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289';
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

let townName = "Fish Haven";
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == townName) {
                const events = town.events;
                let div1 = document.createElement('div');
                let h3 = document.createElement('h3');
                let hr = document.createElement('hr');
                h3.innerHTML = `${town.name} Events:`;
                div1.appendChild(h3);
                div1.appendChild(hr);
                events.forEach(event => {
                    let p =document.createElement('p');
                    p.textContent = event;
                    div1.appendChild(p);
                });
                document.getElementById('events').appendChild(div1);
            }
        });
    });