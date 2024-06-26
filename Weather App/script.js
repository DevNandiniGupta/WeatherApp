const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cecfe17447mshe0b5a0987ce9283p1f5dc3jsn1e49e9b2723a',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function go(q) {

    try {
        const response = await fetch(url + q, options);
        const result = await response.json();
        // console.log(result);
        
        document.querySelector(".city").innerHTML = result.location.name;
        document.querySelector(".temp").innerHTML = Math.round(result.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = result.current.humidity + " %";
        document.querySelector(".wind").innerHTML = result.current.wind_kph + " km/h";

        if (result.current.condition.text == "Sunny") {
            weatherIcon.src = "/Images/sun (1).png";

        }

        if (result.current.condition.text == "Clear") {
            weatherIcon.src = "/Images/sun (1).png";

        }

        else if (result.current.condition.text == "Overcast") {
            weatherIcon.src = "/Images/sun (1).png";

        }
        else if (result.current.condition.text == "Partly Cloudy ") {
            weatherIcon.src = "/Images/cloudy-day.png";

        }

        else if (result.current.condition.text == "Partly cloudy") {
            weatherIcon.src = "/Images/cloudy (1).png";

        }

        else if (result.current.condition.text == "Wind") {
            weatherIcon.src = "/Images/wind.png";

        }

        else if (result.current.condition.text == "Snow") {
            weatherIcon.src = "/Images/snow.png";

        }

        document.querySelector(".weather").style.display = "block";

    } catch (error) {
       
         document.querySelector(".faulty").style.display= "block";
        // console.error(error);
    }

}


searchBtn.addEventListener("click", () => {
    go(searchBox.value);

})
