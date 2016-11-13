"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngAfterContentInit = function () {
        //Google map for contact us page
        // $(document).ready(function() {
        function initialize() {
            var latlng = { lat: 40.733355, lng: -73.982327 };
            var mapOptions = {
                center: latlng,
                zoom: 14
            };
            var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
            var marker = new MarkerWithLabel({
                position: latlng,
                map: map,
                labelContent: '<div class="marker-loaded"><div class="map-marker"><img src="assets/img/f.svg" alt="" /></div></div>',
                labelClass: "marker-style"
            });
            var contentString = '<div id="mapinfo">' +
                '<h4 class="firstHeading">Company Name</h4>' +
                '<h6>525 W 28th St, New York, NY 10001</h6>' +
                '<div><i class="fa fa-phone"></i><a href="tel:+48 192 28383746">+48 192 28383746</a></div>' +
                '<div><i class="fa fa-mobile"></i><a href="tel:+48 192 28383746">+48 192 28383746</a></div>' +
                '<p id="at">@</p>' +
                '<div class="contactblock"><a href="mailto:info@suburb.com">info@suburb.com</a></div>' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        // });
    };
    ContactComponent = __decorate([
        core_1.Component({
            templateUrl: "app/contact/contact.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map