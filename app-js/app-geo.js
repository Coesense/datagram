var map,
	zoomLevel = 13,
	markerTab = [],
	infowindow = null,
	infoBox = null,
	//geocoder,
	defaultLat = 48.856609, defaultLon = 2.348976, //default = Paris
	userLat, userLon,
	zoomControl = document.createElement('div'),
	zoomControlInc = document.createElement('div'),
	zoomControlDec = document.createElement('div');

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		userLat = position.coords.latitude;
		userLon = position.coords.longitude;
		initialize();
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

	//geocoder = new google.maps.Geocoder();
	
	infoBox = new InfoBox({
		content: "..."
	});

	var greyScale = new google.maps.StyledMapType(mapStyle,
    {name: "Grey Scale"});

	//options of the map
	var opt = {
		zoom: zoomLevel,
		scrollwheel: false,
		center: new google.maps.LatLng(userLat == null ? defaultLat : userLat, userLon == null ? defaultLon : userLon),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'grey_scale']
		}
	};

	
	//starts the map
	map = new google.maps.Map(document.getElementById('map'), opt);
	//sets the map's style
	map.mapTypes.set('grey_scale', greyScale);
	map.setMapTypeId('grey_scale');

	$(zoomControl).attr('id','zoomControl');
	$(zoomControlInc).attr('id','zoomControlInc').append('+');
	$(zoomControlDec).attr('id','zoomControlDec').append('-');

	$(zoomControl).append(zoomControlInc, zoomControlDec);

	zoomControl.index = 1;
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControl);


	google.maps.event.addDomListener(zoomControlInc, 'click', function() {
		map.setZoom(map.getZoom()+1);
	});

	google.maps.event.addDomListener(zoomControlDec, 'click', function() {
		map.setZoom(map.getZoom()-1);
	});
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
		var cont = '<img src="'+markerOptions.HREF+'" onclick="infoBox.close()" />';
		infoBox.setOptions({
			alignBottom: true,
			disableAutoPan: true,
			content: cont,
			pixelOffset: new google.maps.Size(-75, -25),
			zIndex: 1,
			boxClass: "infoBox",
			closeBoxURL: "",
			isHidden: false,
			pane: "floatPane",
			enableEventPropagation: true
		});
		infoBox.open(map, this);
		map.panTo(infoBox.position_);
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