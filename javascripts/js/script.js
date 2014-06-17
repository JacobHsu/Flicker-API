
window.addEventListener('load',function(){
	
	var results = document.getElementById('results');
	
	
	
	function search(){
	

		
		//get accuracy
		var accuracyField = document.getElementById('accuracy');
		var accuracyID = accuracyField.selectedIndex;
		var accuracy = accuracyField.options[accuracyID].value;
		console.log(accuracy);
		
		
		//get tags
		var tagsField = document.getElementById('tags');
		var tags = tagsField.value;
		console.log(tags);
		

	
	 var resultsHTML ='';
	 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	 //NOTE: https://www.flickr.com/services/api/flickr.photos.search.html
	  $.getJSON( flickerAPI, {
		tags: tags,//"mount rainier",
		accuracy: accuracy,
		format: "json"
	  }).done(function( data ) {
		  $.each( data.items, function( i, item ) {
	
						 resultsHTML += '<div class="person-row">\
						  <img src="' +item.media.m +'">\
						  <div class="person-info">\
						  <div>' + item.title +'</div>\
						  <div>'+item.date_taken+'</div></div>\
						  </div>';

						  results.innerHTML = resultsHTML;
						  
			if ( i === 3 ) {
			  return false;
			}
		  });
		});
	

		

  

	}
	
	var searchBtn = document.getElementById('searchBtn');
	
	searchBtn.addEventListener('click',search);
});