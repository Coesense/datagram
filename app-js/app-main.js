var apiSrc;
var apiColor;

$('.radio').live("click", function(){ 
	apiSrc = $(this).attr('id');
	getData();
});

function getData(){
	$('#main').empty();
	$('#main').append('<div id="loader" src="app-img/loader.gif"> </div>');
	
	var apiData;
	var apiHash = $('#hashs').val();
	
	if(apiSrc==""||apiSrc="instagram"){apiSrc = "instagram"; apiColor = '#ff0000';}
	else if(apiSrc=="twimg"){apiColor = '#00ff00';}
	else {apiColor = '#0000ff';}

	$.ajax({
	  type: "POST",
	  url: "app-api/app-data.php",
	  data: { hash: apiHash, src: apiSrc, loc:"[48.856609,2.348976,5.0,3.0]" }
	}).success(function(msg) {
		$('#main').empty();
		apiData = jQuery.parseJSON(msg);
		  $.each(msg, function(index, value) {
			  $('#main').append('<img src="'+apiData.hits[index].fll+'" />');
			  createMarker(apiData.hits[index].loc.lat,apiData.hits[index].loc.lon,apiColor);
		  });
	});

}

