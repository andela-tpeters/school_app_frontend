//Date picker
 	// $(document).ready(function() {
 	// 	$("#date-from").datepicker({
 	// 		showOtherMonths: true,
 	// 		selectOtherMonths: true
 	// 	});
 	// 	$("#date-to").datepicker({
 	// 		showOtherMonths: true,
 	// 		selectOtherMonths: true
 	// 	});
 	// });

	//Google map for property page

	// $("#map4").html("<p>This is for the map</p>");
	function initialize() {
		$.getScript("public/assets/js/locations.js", function() {
			var latlng = {lat: 51.512707, lng:  -0.130447};
			var mapOptions = {
				center: latlng,
				zoom: 15
			};
			var map = new google.maps.Map(document.getElementById('map4'),
				mapOptions);
			// console.log($(".map4"));
			var marker = new MarkerWithLabel({
				position: latlng,
				map: map,
				labelContent: '<div class="marker-loaded"><div class="map-marker"><img src="assets/img/f.svg" alt="" /></div></div>',
				labelClass: "marker-style"
			});
			var contentString =   '<div id="mapinfo">'+
			'<h4 class="firstHeading">St Floor Wingate House</h4>'+
			'<h6>London, 93-107 Shaftesbury Ave, W1D 5DY</h6>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
			//resize for opeening and to get center of map
			$('.map4').bind('click', function(){
				google.maps.event.trigger(map4, 'resize');
				map.panTo(marker.getPosition());
			});

			// Use this code below only if you are using google street view
			/*	var fenway = {lat: 42.345573, lng: -71.098326};
			var panorama = new google.maps.StreetViewPanorama(document.getElementById('tab3'), {
					position: fenway,
					pov: {
						heading: 34,
						pitch: 10
					}
				});
			map.setStreetView(panorama);
			$('.street-view').bind('click', function(e){
				setTimeout(function() {
					google.maps.event.trigger(panorama, 'resize');
				}, 400 ); 
			});*/

		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);  