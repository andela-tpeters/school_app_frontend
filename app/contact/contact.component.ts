import { Component, AfterContentInit } from "@angular/core";
import * as $ from 'jquery';
declare var google: any;
declare const MarkerWithLabel: any;

@Component({
  templateUrl: "app/contact/contact.component.html"
})


export class ContactComponent implements AfterContentInit {

  ngAfterContentInit() {
    //Google map for contact us page
  	// $(document).ready(function() {
  		function initialize() {
  			var latlng = {lat: 40.733355, lng: -73.982327};
  			var mapOptions = {
  				center: latlng,
  				zoom: 14
  			};
  			var map = new google.maps.Map(document.getElementById('map2'),
  				mapOptions);
  			var marker = new MarkerWithLabel({
  				position: latlng,
  				map: map,
  				labelContent: '<div class="marker-loaded"><div class="map-marker"><img src="assets/img/f.svg" alt="" /></div></div>',
  				labelClass: "marker-style"
  			});
  			var contentString =  	'<div id="mapinfo">'+
  														'<h4 class="firstHeading">Company Name</h4>'+
  														'<h6>525 W 28th St, New York, NY 10001</h6>' +
  														'<div><i class="fa fa-phone"></i><a href="tel:+48 192 28383746">+48 192 28383746</a></div>' +
  														'<div><i class="fa fa-mobile"></i><a href="tel:+48 192 28383746">+48 192 28383746</a></div>' +
  														'<p id="at">@</p>'+
  														'<div class="contactblock"><a href="mailto:info@suburb.com">info@suburb.com</a></div>' +
  														'</div>';

  			var infowindow = new google.maps.InfoWindow({
  				content: contentString
  			});
  			marker.addListener('click', function() {
  				infowindow.open(map, marker);
  			});
  		}
  		google.maps.event.addDomListener(window, 'load', initialize);
  	// });
  }
}
