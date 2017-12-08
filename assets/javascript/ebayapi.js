//ebay
$("#submit-button").on("click", function() {
		console.log("button click worked");
		var productSearch = $("#video-search").val().trim();
		var myAppID = "MichaelD-CodingBo-PRD-b51ca6568-036a5a77"	
		// decalare a variable to our API so we can call it with AJAX later
		var queryUrl = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" + myAppID + "&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=" + productSearch + "&paginationInput.entriesPerPage=3";
//FOR INSOMNIA TEST -> http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=MichaelD-CodingBo-PRD-b51ca6568-036a5a77&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=iPhone&paginationInput.entriesPerPage=3		
		//make an AJAX request to queryURL using HTTP GET
		$.ajax({
		  url: queryUrl,
		  method: "GET"
		}).done(function(response) {
		  console.log(response);
	
		  // // build this to hold the video - <iframe width="580" height="320" src="https://www.youtube.com/embed/KvNis_A6UaI" frameborder="0" allowfullscreen></iframe>
		  // let iframe = $("<iframe>");
		  // iframe.attr("src", "https://www.youtube.com/embed/" + video);
		  // iframe.attr("frameboarder", "0");
		  // iframe.attr("width", "580");
		  // iframe.attr("height", "320");
	
		  // console.log(iframe);
	
		  // $(".result").append(iframe);
	
	
		});
	  });
//ajax call for ebay

//onclick for login button

//onclick for home button

//onclick event for search button

//onclick event for user-specific search history

//firebase
	//login firebase script
	//user-specific search history script