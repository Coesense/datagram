var apiSrc;
var apiColor;
var circInsta, circTwimg, circYfrog;
var radInsta = 35, radTwimg = 35, radYfrog = 35;
var titleInsta, titleTwimg, titleYfrog;

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

$(document).ready(function(){
	var r = Raphael('diagram', 600, 250),
		rad = 73,
		defaultText = '0',
		speed = 250;
			
	circInsta = r.circle(70, 100, radInsta).attr({ stroke: 'none', fill: '#cb363b', opacity: 0.5 });
			
	titleInsta = r.text(70, 98, defaultText).attr({
		font: '20px Ubuntu Mono',
		fill: '#fff'
	}).toFront();

	circTwimg = r.circle(270, 100, radTwimg).attr({ stroke: 'none', fill: '#3399cc', opacity: 0.5 });
			
	titleTwimg = r.text(270, 98, defaultText).attr({
		font: '20px Ubuntu Mono',
		fill: '#fff'
	}).toFront();

	circYfrog = r.circle(470, 100, radYfrog).attr({ stroke: 'none', fill: '#33cc77', opacity: 0.5 });
			
	titleYfrog = r.text(470, 98, defaultText).attr({
		font: '20px Ubuntu Mono',
		fill: '#fff'
	}).toFront();
})


function updateCirc(i, t, y){
	var total = i+t+y;

	circInsta.stop().animate({ opacity: 1, r: (i/total)*50 }, 500, '<');
	titleInsta.attr({ text: i });
	circTwimg.stop().animate({ opacity: 1, r: (t/total)*50 }, 500, '<');
	titleTwimg.attr({ text: t });
	circYfrog.stop().animate({ opacity: 1, r: (y/total)*50 }, 500, '<');
	titleYfrog.attr({ text: y });
}

function getData(){
	deleteMarker();
	$('#main').empty();
	$('#bottom').empty();
	$('#main').append('<div id="loader" src="app-img/loader.gif"> </div>');
	$('#loader').hide();
	$('#loader').fadeIn('fast');
	
	var apiData;
	var apiCount;
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
		apiCount = jQuery.parseJSON(msg);
		updateCirc(apiCount.instagram,apiCount.twimg,apiCount.yfrog);
	});
	
}

