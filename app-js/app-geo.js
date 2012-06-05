var map;
var circTab = [];

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

function createMarker(lat, lon, color, href){
	var markerOptions = {
		strokeWeight: 0,
		fillColor: color,
		fillOpacity: 1,
		map: map,
		center: new google.maps.LatLng(lat, lon),
		radius: 45
	};

	circ = new google.maps.Circle(markerOptions);

	// href = 'https://si0.twimg.com/profile_images/2191094345/DSC_3156_normal.png';

	// var cont = '<img src="'+href+'" />';

	// var infowindow = new google.maps.InfoWindow({
	//     content: cont
	// });

	// google.maps.event.addListener(circ, 'click', function() {
	// 	infowindow.setPosition(circ.getCenter());
	// 	infowindow.open(map);
	// });

	circTab.push(circ);
}

function deleteMarker() {
	if (circTab) {
		for (i in circTab) {
			circTab[i].setMap(null);
		}
		circTab.length = 0;
	}
}

google.maps.event.addDomListener(window, 'load', initialize);