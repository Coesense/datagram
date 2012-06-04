var apiSrc;

$('#button').live("click", function(){ 
	getData();
});

$('.radio').live("click", function(){ 
	apiSrc = $(this).val();
	getData();
});

function getData(){
	$('#main').empty();
	$('#main').append('<img src="app-img/loader.gif" />');
	
	var apiData;
	var apiHash = $('#hashs').val();
	
	if(apiSrc==""){apiSrc = "instagram";}

	$.ajax({
	  type: "POST",
	  url: "app-api/app-data.php",
	  data: { hash: apiHash, src: apiSrc, loc:"[48.95,2.46,5.0,5.0]" }
	}).done(function(msg) {
		$('#main').empty();
		apiData = jQuery.parseJSON(msg);
		  $.each(msg, function(index, value) {
			  $('#main').append('<img src="'+apiData.hits[index].fll+'" />');
		  });
	});
}
