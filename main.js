







  $('#clearAll').on('click', function () {
    // Creating a div to hold the movie
    
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "217063ed3d2b47469db37df8ee39f512",
    'q': "nintendo",
    'hl': "true"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (result) {
    var docs = result.response.docs
    console.log(docs)
    console.log(result);
  }).fail(function (err) {
    throw err;
  });
    var infoDiv = $("<div class='info'>");
    var pOne = $("<p>").text("Rating: ");
    $(infoDiv).append(pOne)
    $('#well-section').prepend(infoDiv);
    console.log(infoDiv);
  })
