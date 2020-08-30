var apiKey = "cb1f3540c1ec2e67318de31161b5e1ea"

$(document).ready(function () {
            $("#searchBtn").on("click", function () {
                var cityName = $("#city").val();
                console.log(cityName);
                searchWeather(cityName);
                $("#city").val("");
                localStorage.setItem("cityName");
            });

            function searchWeather(city) {
                console.log("Im here");
                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial",
                    method: "GET"
                }).then(function (response) {
                    console.log(response)
                    uvIndex(response.coord.lat, response.coord.lon)
                    var title = $("<h3>").text(response.name);
                    var temp = $("<p>").text("Current Temperature: " + response.main.temp);

                    //add vars for humitity etc /
                    $("#current").append(title, temp);
                    forecast(city)
                });
            };

            function uvIndex(lat, lon) {
                //in value slot inside response
                //ajax call then console log response to see how it looks
                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/uvi?appid=" + city + "&appid=" + apikey + lat + lon + "&units=imperial",
                    method: "GET"
                }).then(function (response) {
                    console.log(response)
                    uvIndex(response.coord.lat, response.coord.lon)
                    var uv = $("<p>").text(response.name)

                })
                set up p tag response.val
                then append to current like line 29 
                //   }
                function forecast(city) {
                    console.log("forecast");
                    $.ajax({
                            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial",
                            method: "GET"
                        }).then(function (response) {
                                //move to inside ajax.Then 
                                const dailyData = response.list.filter(reading => {
                                        return reading.dt_txt.includes("15:00:00")
                //                     }
                //                 }