var apiSrc;

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
	  data: { hash: apiHash, src: apiSrc, loc:"[48.856609,2.348976,10.0,10.0]" }
	}).done(function(msg) {
		$('#main').empty();
		apiData = jQuery.parseJSON(msg);
		  $.each(msg, function(index, value) {
			  $('#main').append('<img src="'+apiData.hits[index].fll+'" />');
		  });
	});
}
