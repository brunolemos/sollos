// Template.CooperativeTemplate.helpers({
// 	exampleMapOptions: function() {
// 	    // Make sure the maps API has loaded
// 	    if (GoogleMaps.loaded()) {
// 	    	Meteor.call("geoCode", this.address, function (error, result) {
// 	    		GoogleMaps.ready('exampleMap', function(map) {
// 	    			console.log(result);
// 	    			// Add a marker to the map once it's ready
// 	    			var marker = new google.maps.Marker({
// 	    				position: new google.maps.LatLng(result[0].latitude, result[0].longitude),
// 	    				map: map.instance,
// 	    				zoom: 8
// 	    			});
// 	    		});
// 	    	});
// 	    }
// 	}
// });

Template.body.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-20.9550784, -48.4864202),
        zoom: 8
      };
    }
  }
});

Template.body.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});