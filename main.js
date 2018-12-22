// SETUP VARIABLES ==============================================================

// Variable to store API Key
var authkey = '217063ed3d2b47469db37df8ee39f512';

// These variables will store user input on our page
var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// This url will append to searchTerm once user makes an api call
var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authkey + "&q=";


// METHODS =====================================================================



function displayInfo() {
  // Creating a div to hold the movie
  $.ajax({
    url: queryurl,
    method: 'GET',
  }).then(function (result) {
    // Storing the headline
    var headline = result.response.docs[0].headline.main;
    console.log(headline)
    console.log(result);
    // Creating a div to hold the data
    var resultsDiv = $("<div class='results'>");
    // Creating an element to have the headline displayed
    var pOne = $("<p>").text("Headline: " + headline);
    // Displaying the results
    resultsDiv.append(pOne);
    // Adding to browser
    $('#well-section').prepend(resultsDiv);
  }).fail(function (err) {
    throw err;
  });
}

// This function handles events where a movie button is clicked
$("#search").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  searchTerm = $("#searchTermInput2").val().trim();
  console.log(searchTerm);
  // Adding movie from the textbox to our array
  //movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  //renderButtons();
});
$('#clearAll').on('click', function () {
  displayInfo();
});