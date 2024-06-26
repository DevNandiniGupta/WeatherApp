// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cecfe17447mshe0b5a0987ce9283p1f5dc3jsn1e49e9b2723a',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function go(city){

//     try {
//         const response = await fetch(url + city, options);
//         const result = await response.json();
//         console.log(result);

//         // document.querySelector(".city").innerHTML= result;
//          document.querySelector(".temp").innerHTML= Math.round(result.temp) + "°C";
//         document.querySelector(".humidity").innerHTML= result.humidity+ " %";
//         document.querySelector(".wind").innerHTML= result.wind_speed + " km/h";

//     } 
    
//     catch (error) {
//         console.error(error);
//         // console.log("not a valid city");
//     }

// }

// searchBtn.addEventListener("click", ()=>{
//     go(searchBox.value);

// })



// const url = 'https://the-weather-api.p.rapidapi.com/api/weather/city=';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cecfe17447mshe0b5a0987ce9283p1f5dc3jsn1e49e9b2723a',
// 		'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
// 	}
// };
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function go(city){
//     try {
//         const response = await fetch(url + city, options);
//         const result = await response.json();
//         console.log(result);

//         document.querySelector(".city").innerHTML= result.data.city;
//         document.querySelector(".temp").innerHTML= Math.round(result.data.temp) + "°C";
//     document.querySelector(".humidity").innerHTML= result.data.humidity;
//         document.querySelector(".wind").innerHTML= result.data.wind;
//     } catch (error) {
//         console.error(error);
//     }

// }

// searchBtn.addEventListener("click", ()=>{
//        go(searchBox.value);
    
//      })


// const url = 'https://open-weather13.p.rapidapi.com/city/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cecfe17447mshe0b5a0987ce9283p1f5dc3jsn1e49e9b2723a',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };


// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button"); 

// async function go(city){

//     try {
//         const response = await fetch(url+city, options);
//         const result = await response.text();
//         console.log(result);


//        //  document.querySelector(".city").innerHTML= result.country;
//         document.querySelector(".temp").innerHTML= Math.round(result.temp) + "°C";
//         document.querySelector(".humidity").innerHTML= result.humidity+ " %";
//         document.querySelector(".wind").innerHTML= result.speed + " km/h";

//     } catch (error) {
//         console.error(error);
//     }
// }

// searchBtn.addEventListener("click", ()=>{
//         go(searchBox.value);
    
//      })
 
// go();



// <!-- <script>



// const apiKey = "3e4a7f44a37ed5679a5706c91f8fc05a";

// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=india&appid=3e4a7f44a37ed5679a5706c91f8fc05a&units=metric";


// // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={banglore},91&appid=3e4a7f44a37ed5679a5706c91f8fc05a&units=metric";

// // const apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=banglore&appid=3e4a7f44a37ed5679a5706c91f8fc05a&units=metric";

// async function checkWeather(){


// const response = await fetch(apiUrl + `&appid= ${apiKey}`);
// var data = await response.json();
// console.log(data);
// }

// checkWeather();
// </script> -->