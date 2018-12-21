$(document).ready(function () {

var url = "http://api.nytimes.com/svc/archive/v1/2016/11.json?api-key=217063ed3d2b47469db37df8ee39f512";

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

    $('#search').on('click', function () {
        alert('button clicked');
    })

})