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

    for (i = 0; i < numArticles; i++) {
      console.log("HEADLINE: " + NYTData.response.docs[i].headline.main)
      console.log("SECTION: " + NYTData.response.docs[i].section_name)
      console.log("PUBLICATION DATE: " + NYTData.response.docs[i].pub_date)
      console.log("AUTHOR: " + NYTData.response.docs[i].byline.original)
      console.log("URL: " + NYTData.response.docs[i].web_url)
    
      // Start Dumping HTML here
      var wellSection = $('<div>')
      wellSection.addClass('well')
      wellSection.attr('id', 'articleWell-' + i);
      $('#well-section').append(wellSection);

      // Attach contents to the appropriate well
      
    }


    // Logging to the console
    console.log(queryURL)
    console.log(numResults)
    console.log(NYTData)
  })
}

// MAIN PROCESSES
// ===================================

//1. Retrieve user inputs and convert to variables
// 2. Use those variables to run AJAX call to the New York Times
// 3. Break down the NYT Object into useable fields
// 4. Dynamically generate HTML content
// 5. Dealing with "edge cases" -- bugs or situations that are not intuitive

// This function handles events where a search button is clicked
$("#search").on("click", function () {

  // Get Search Term
  searchTerm = $("#searchTermInput2").val().trim();

  // Add in the Search Term
  var newURL = queryURLBase + searchTerm

  // Get the number of Records
  numResults = $('#numRecords').val();

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

  runQuery(numResults, newURL);


  return false;
});