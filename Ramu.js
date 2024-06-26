//let apikey="d01d1d6cef42b9a64a7ee5e688621315"
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//accessing the input values to display the data
let input = document.getElementById("location");
let BtnEle = document.getElementById("Btn");
let span = document.getElementById("tempo");
let locationEle = document.getElementById("description");
let ram = document.getElementById("place-Name");

//apikey
let apikey = "d01d1d6cef42b9a64a7ee5e688621315";

BtnEle.onclick = function () {
  if (input.value == "") {
    alert("please enter the Location");
  } else {
    loc = input.value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
    //fetching the api data
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const {name} = data;
        const {feels_like} = data.main;
        const {description} = data.weather[0];

        ram.innerText = name;
        span.innerText = Math.round(feels_like-276);
        locationEle.innerText = description;
      })
      .catch(() => {
        alert("plz enter valid location");
      });
  }
  input.value = "";
};
