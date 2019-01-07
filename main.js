// SETUP VARIABLES ==============================================================

// Variable to store API Key
var authkey = '217063ed3d2b47469db37df8ee39f512';

// These variables are search parameters
var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// This url will append to searchTerm once user makes an api call
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authkey + "&q=";

// Variable to track number of articles
var articleCounter = 0;


// FUNCTIONS
// =====================================================================

function runQuery(numArticles, queryURL) {
  // AJAX function
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(NYTData) {
    console.log(queryURL)
    console.log(NYTData)
  })
}

// MAIN PROCESSES
// ===================================

//1. Retrieve user inputs and convert to variables
// 2. Use those variables to run AJAX call to the New York Times
// 3. Break down the NYT Object into useable fields
// 4. Dynamically generate HTML content
/*.then(function (result) {
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
}); */

// 5. Dealing with "edge cases" -- bugs or situations that are not intuitive

// This function handles events where a search button is clicked
$("#search").on("click", function () {

  searchTerm = $("#searchTermInput2").val().trim();
  console.log(searchTerm)

  // Add in the searchTerm
  var newURL = queryURLBase + searchTerm
  console.log(newURL)

  // Get the number of Records
  numResults = $('');

  // Get the Start Year and End Year
  startYear = $('#startYear').val().trim();
  endYear = $('#endYear').val().trim();

  // Conditional statement which only adds date information to URL if present
  if (parseInt(startYear)) {

      //Add the necessary fields
      startYear = startYear + '0101'

      // Add the date information to the URL
      newURL = newURL + "&begin_date=" + startYear;
  }

  if (parseInt(endYear)) {

      // Add the necessary fields
      endYear = endYear + '0101';

      // Add the date information to the URL
      newURL = newURL + "&end_date" + endYear;
  }

  console.log(newURL);

  runQuery(10, newURL);


  return false;
});