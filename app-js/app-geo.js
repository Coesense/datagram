var map,
	markerTab = [],
	allMarker = [],
	infowindow = null;

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
			center: new google.maps.LatLng(48.856609, 2.348976),
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

	allMarker.push(markerOptions);
}

function displayMarker(){
	for (var i = 0; i < allMarker.length; i++) {
		setTimeout(function() {
		    m = new google.maps.Marker(allMarker[i]);

		    var th;

		    allMarker[i].HREF == '' ? th = allMarker[i].FULL : th = allMarker[i].HREF;

		    google.maps.event.addListener(m, 'click', function () {
		    	var cont = '<img src="'+allMarker[i].HREF+'" />';
		    	infowindow.setContent(cont);
		    	infowindow.open(map, this);
		    });

		    markerTab.push(m);
		}, i * 200);
		
	};
	console.log(allMarker.length);
	
}

function deleteMarker() {
	if (markerTab) {
		for (i in markerTab) {
			markerTab[i].setMap(null);
		}
		markerTab.length = 0;
	}

	if (allMarker) {
		allMarker.length = 0;
	}
}

google.maps.event.addDomListener(window, 'load', initialize);