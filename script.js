const apikey = "f58f8954768d4a87c717737f3ccbb50e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const weaterIcon = document.querySelector('.weather-icon');
    const searchBox = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');

    async function checkweather(city){
        const response = await fetch(apiurl + city + `&appid=${apikey}`)

        if(response.status == 404){
            document.querySelector('.error').style.display = "block";
            document.querySelector('.weather').style.display = "none";
            document.querySelector('.details').style.display = 'none';

        }else{
            var data = await response.json();

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

        if(data.weather[0].main == 'Clouds'){
            weaterIcon.src = 'images/clouds.png';
        }else if (data.weather[0].main == 'Clear'){
            weaterIcon.src = 'images/clear.png'
        }else if (data.weather[0].main == 'Drizzle'){
            weaterIcon.src = 'images/drizzle.png';
        }else if (data.weather[0].main == 'Rain'){
            weaterIcon.src = 'images/rain.png';
        }else if (data.weather[0].main == 'Mist'){
            weaterIcon.src = 'images/mist.png';
        }else if (data.weather[0].main == 'Snow'){
            weaterIcon.src = 'images/snow.png';
        }
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = "none";
        document.querySelector('.details').style.display = 'flex';
        }
    }

    searchBtn.addEventListener("click", ()=>{
        checkweather(searchBox.value);
    })