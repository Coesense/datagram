var map,
	markerTab = [],
	infowindow = null,
	userLat,
	userLon;

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		userLat = position.coords.latitude;
		userLon = position.coords.longitude;
		console.log("lat:"+position.coords.latitude+"\n"+"lon:"+position.coords.longitude);
		initialize()
	}, initialize);
}else {
	alert('Your browser doesn\'t support geolocation');	
}

function initialize() {	

	var mapStyle = [
	  {
	    stylers: [
	      { saturation: -100 }
	    ]
	  },{
	    elementType: "labels",
	    stylers: [
	      { visibility: "off" }
	    ]
	  },{
	    featureType: "water",
	    stylers: [
	      { hue: "#00eeff" },
	      { saturation: 40 }
	    ]
	  },{
	    featureType: "road",
	    stylers: [
	      { visibility: "simplified" }
	    ]
	  },{
	    featureType: "road",
	    elementType: "labels",
	    stylers: [
	      { visibility: "off" }
	    ]
	  }
	];

	infowindow = new google.maps.InfoWindow({
		content: "wait..."
	});


	var greyScale = new google.maps.StyledMapType(mapStyle,
    {name: "Grey Scale"});

	//options of the map
	var opt = {
		zoom: 13,
		scrollwheel: false,
		center: new google.maps.LatLng(userLat == null ? 48.856609 : userLat, userLon == null ? 2.348976 : userLon),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'grey_scale']
		}
	};

	
	//starts the map
	map = new google.maps.Map(document.getElementById('map'), opt);

	map.mapTypes.set('grey_scale', greyScale);
	map.setMapTypeId('grey_scale');

}

function createMarker(lat, lon, color, href, full){
	var markerOptions = {
		draggable: false,
		animation: google.maps.Animation.DROP,
		map: map,
		icon: new google.maps.MarkerImage('app-img/'+color+'.png'),
		center: new google.maps.LatLng(lat, lon),
		position: new google.maps.LatLng(lat, lon),
		HREF: href,
		FULL: full
	};

	m = new google.maps.Marker(markerOptions);

	var th;

	markerOptions.HREF == '' ? th = markerOptions.FULL : th = markerOptions.HREF;

	google.maps.event.addListener(m, 'click', function () {
		var cont = '<img src="'+markerOptions.HREF+'" />';
		infowindow.setContent(cont);
		infowindow.open(map, this);
	});

	markerTab.push(m);
}

function deleteMarker() {
	if (markerTab) {
		for (i in markerTab) {
			markerTab[i].setMap(null);
		}
		markerTab.length = 0;
	}
}