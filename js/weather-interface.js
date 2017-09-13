$(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9204738acaf5b47d8cef3c840b1ffe27`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(reqest.statusText));
        }
        request.open("GET", url, true);
        request.send();
      }
    });

    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}.`);
    });
  });
});






    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9204738acaf5b47d8cef3c840b1ffe27`).then(function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
    }).fail(function() {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`)
    });
  });
});










// var apiKey = require('./../.env').apiKey;
//
// $(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//     $.ajax({
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9204738acaf5b47d8cef3c840b1ffe27`,
//         type: 'GET',
//         data: {
//           format: 'json'
//         },
//         success: function(response) {
//           $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//           $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//         },
//         error: function() {
//           $('#errors').text("There was an error processing your request. Please try again.")
//         }
//     });
//   });
// });
