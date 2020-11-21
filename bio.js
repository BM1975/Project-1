// var APIKey = "b1bf4038c068f0c0f33135c2664f2e51";
// Here we are building the URL we need to query the database
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=los+angeles&appid=b1bf4038c068f0c0f33135c2664f2e51";
// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
        // Log the queryURL
        console.log(queryURL);

        console.log(response);

        $(".city").html("<h1>" + response.name + " Weather</h1>");

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        $(".tempF").text("Temperature(F) " + tempF.toFixed(2));
        // Log the data in the console as well

        console.log("Temperature(F): " + tempF);
        console.log(response.name)
    });






