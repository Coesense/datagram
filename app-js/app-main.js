var apiSrc;
var apiColor;

$('.radio').live("click", function(){
	apiSrc = $(this).attr('id');
	getData();
});

$('#scroll').live("click", function(){
	$.scrollTo($('#main'), 800);
});
$('#scrollUp').live("click", function(){
	$.scrollTo($('header'), 1200);
});

function getData(){
	deleteMarker();
	$('#main').empty();
	$('#bottom').empty();
	$('#main').append('<div id="loader" src="app-img/loader.gif"> </div>');
	$('#loader').hide();
	$('#loader').fadeIn('fast');
	
	var apiData;
	var apiHash = $('#hashs').val();
	
	if(apiSrc==""||apiSrc=="instagram"){apiSrc = "instagram"; apiColor = 'insta';}
	else if(apiSrc=="twimg"){apiColor = 'twimg';}
	else {apiColor = 'yfrog';}

	$.ajax({
		type: "POST",
		url: "app-api/app-data.php",
		data: { hash: apiHash, src: apiSrc, loc:"[48.856609,2.348976,5.0,3.0]" }
	}).success(function(msg) {
		$('#main').empty();
		$('#bottom').append('<footer><a href="#" id="scrollUp"></a></footer>');
		apiData = jQuery.parseJSON(msg);
		$.each(msg, function(index, value) { 
			$img = $('<img />');
			$img.attr('src', apiData.hits[index].fll).load(function() {
				createMarker(apiData.hits[index].loc.lat,apiData.hits[index].loc.lon,apiColor,apiData.hits[index].thb,apiData.hits[index].fll);
				$('#main').append($(this));
			});
	  	});
		
	});

	$.ajax({
		type: "POST",
		url: "app-api/app-count.php",
		data: { hash: apiHash, loc:"[48.856609,2.348976,5.0,3.0]" }
	}).success(function(msg) {
		apiData = jQuery.parseJSON(msg);
		$.each(msg, function(index, value) { 
			
	  	});
		
	});
	
}

