$(function() {
  $('#dino-btn').click(function() {
    let paragraphs = $('#paragraphs').val();
    let words = $('#words').val();

    $('#paragraphs').val("");
    $('#words').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=html&words=${words}&paragraphs=${paragraphs}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
          //when resolved - recieves value and ready to move on to then function to anyone referencing promise
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(html) {
      $('.showDinoIpsum').html(html);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}.`);
    });
  });
  $('#reset-btn').click(function() {
    let paragraphs = $('#paragraphs').val();
    let words = $('#words').val();

    $('.showDinoIpsum').html("");
  });
});
  
