var apiSrc,
	apiColor,
	circInsta, circTwimg, circYfrog, circFour,
	radInsta = 35, radTwimg = 35, radYfrog = 35 , radFour = 35,
	titleInsta, titleTwimg, titleFour, titleYfrog;
var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;

$('.radio').live("click", function(){
	apiSrc = $(this).attr('id');
	getData();
});

$('#scrollDown').live("click", function(){
	//$.scrollTo($('#main'), 800);
	$('html,body').animate({scrollTop: $('#main').offset().top}, 800);
	return false;
});
$('#scrollUp').live("click", function(){
	//$.scrollTo($('header'), 1200);
	$('html,body').animate({scrollTop: $('header').offset().top}, 1200);
	return false;
});

/*

$(document).ready(function(){
	var r = Raphael('diagram', 750, 200),
		rad = 73,
		defaultText = '0',
		speed = 250;
			
	circInsta = r.circle(60, 100, radInsta).attr({ stroke: 'none', fill: '#03266b', opacity: 0.5 });
			
	titleInsta = r.text(60, 98, defaultText).attr({
		font: '20px Ubuntu Mono',
		fill: '#fff'
	}).toFront();

	circFour = r.circle(260, 100, radFour).attr({ stroke: 'none', fill: '#083da5', opacity: 0.5 });
			
	titleFour = r.text(260, 98, defaultText).attr({
		font: '20px Ubuntu Mono',
		fill: '#fff'
	}).toFront();

	circTwimg = r.circle(460, 100, radTwimg).attr({ stroke: 'none', fill: '#3c6fd2', opacity: 0.5 });
			
	titleTwimg = r.text(460, 98, defaultText).attr({
		font: '20px Ubuntu Mono',
		fill: '#fff'
	}).toFront();

	circYfrog = r.circle(660, 100, radYfrog).attr({ stroke: 'none', fill: '#6489d2', opacity: 0.5 });
			
	titleYfrog = r.text(660, 98, defaultText).attr({
		font: '20px Ubuntu Mono',
		fill: '#fff'
	}).toFront();
})


function updateCirc(i, f, t, y){

	if(i==null||i==0){i=0}else{i--}
	if(f==null||f==0){f=0}else{f--}
	if(t==null||t==0){t=0}else{t--}
	if(y==null||y==0){y=0}else{y--}

       var total = i+f+t+y;

       circInsta.stop().animate({ opacity: 1, r: ((i/total)*50) < 25 ? 25 : (i/total)*50 }, 500, '<');
       titleInsta.attr({ text: i });
       circFour.stop().animate({ opacity: 1, r: ((f/total)*50) < 25 ? 25 : (f/total)*50 }, 500, '<');
       titleFour.attr({ text: f });
       circTwimg.stop().animate({ opacity: 1, r: ((t/total)*50) < 25 ? 25 : (t/total)*50 }, 500, '<');
       titleTwimg.attr({ text: t});
       circYfrog.stop().animate({ opacity: 1, r: ((y/total)*50) < 25 ? 25 : (y/total)*50 }, 500, '<');
       titleYfrog.attr({ text: y });
}
*/

function getData(){
	deleteMarker();
	$('footer').hide();
	$('#main').empty().append('<div id="loader" src="app-img/loader.gif"> </div>');
	$('#loader').hide().fadeIn('fast');
	
	var apiData;
	var apiCount;
	var apiHash = $('#hashs').val();
	
	if(apiSrc==""||apiSrc=="instagram"){apiSrc = "instagram"; apiColor = 'insta';}
	else if(apiSrc=="twimg"){apiColor = 'twimg';}
	else if(apiSrc=="foursquare"){apiColor = 'foursquare';}
	else {apiColor = 'yfrog';}

	/*$.ajax({
		type: "POST",
		url: "app-api/app-count.php",
		data: { hash: apiHash, loc:"[48.856609,2.348976,5.0,3.0]" }
	}).success(function(msg) {
		apiCount = jQuery.parseJSON(msg);
		updateCirc(apiCount.instagram,apiCount.foursquare,apiCount.twimg,apiCount.yfrog);
	});*/

	$.ajax({
		type: "POST",
		url: "app-api/app-data.php",
		data: { hash: apiHash, src: apiSrc, loc:"["+userLat+","+userLon+",5.0,3.0]" }
	}).success(function(msg) {
		$('#main').empty();
		$('footer').show();
		apiData = jQuery.parseJSON(msg);
		$.each(msg, function(index, value) { 
			$img = $('<img />');
			if(apiData.hits[index]){
				$img.attr('src', apiData.hits[index].fll).load(function() {
					createMarker(apiData.hits[index].loc.lat,apiData.hits[index].loc.lon,apiColor,apiData.hits[index].thb,apiData.hits[index].fll);
					$('#main').append($(this));
				});
			}
	  	});
		
	});


	
}

