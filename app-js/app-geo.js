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
			center: new google.maps.LatLng(48.856609, 2.348976),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControlOptions: {
      			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'grey_scale']
    		}
	};
	
	//starts the map
	map = new google.maps.Map(document.getElementById('map'), opt);

	map.mapTypes.set('grey_scale', greyScale);
	map.setMapTypeId('grey_scale');

}

google.maps.event.addDomListener(window, 'load', initialize);