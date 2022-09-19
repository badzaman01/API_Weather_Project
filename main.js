var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var cityName = document.querySelector("#name");
var desc = document.querySelector("#desc");
var temp = document.querySelector("#temp");
var maxTemp = document.querySelector("#max-temp");
var minTemp = document.querySelector("#min-temp");
var humidity = document.querySelector("#humidity");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=0521f90cf50b15fcf8207f66758765de&units=imperial" //units=imperial will portray degrees Farenheit instead of making your own function
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data["name"] + ", " + data["sys"]["country"];
      var tempValue =
        "Temperature:   " + data["main"]["temp"] + " <span>&#176;</span>F"; //span gets degrees for temp values
      var descValue = "Forecast:   " + data["weather"][0]["main"];
      var maxTempValue =
        "High:   " + data["main"]["temp_max"] + " <span>&#176;</span>F";
      var minTempValue =
        "Low:   " + data["main"]["temp_min"] + " <span>&#176;</span>F";
      var humidityValue = "Humidity:   " + data["main"]["humidity"] + "%";

      cityName.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
      maxTemp.innerHTML = maxTempValue;
      minTemp.innerHTML = minTempValue;
      humidity.innerHTML = humidityValue;
    });
});

function searchPhotos() {
  let clientID = "QwWt1SLa9fW2y-eNdeIDdfKIocenFJzXFMh4A4Z1gHs";
  let query = document.getElementById("search").value;
  let url =
    "https://api.unsplash.com/search/photos/?client_id=" +
    clientID +
    "&query=" +
    query;

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);

      data.results.forEach((photo) => {
        //for loop to go through the num of pictures in the dictionary from unsplash
        let photoPic = `
        <img src="${photo.urls.regular}">
        <a href=${photo.links.download}">
        `;
        $("#pic-image").append(photoPic); //jquery was used to display the images onto the page
      });
    });
}

const DOM_Elements = {
  dom_list: "#pic-image",
};

const clear_data = () => {
  document.querySelector(DOM_Elements.dom_list).innerHTML = "";
};
