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
var new_school_model_1 = require("./new-school.model");
var $ = require("jquery");
require('icheck');
var ng2_cloudinary_1 = require("ng2-cloudinary");
var angular2_notifications_1 = require("angular2-notifications");
var app_constants_1 = require("../app.constants");
var NewSchoolComponent = (function () {
    function NewSchoolComponent(_notify) {
        this._notify = _notify;
        this.states = app_constants_1.STATES;
        this.schoolType = app_constants_1.TYPE;
        this.owners = app_constants_1.OWNED_BY;
        this.currency = app_constants_1.CURRENCY;
        this.conditions = app_constants_1.CONDITION;
        this.payment_intervals = app_constants_1.PAYMENT_INTERVAL;
        this.properties = app_constants_1.PROPERTIES;
        this.latitude = 40.719457;
        this.longitude = -73.989642;
        this.imageUploaded = false;
        this.notifyOptions = { maxStack: 1, showProgressBar: true };
        this.newSchool = new new_school_model_1.NewSchool('LGA', 'FEE', '23401', 'Surulere', 'School Name', 'Lagos', 'Nigeria', 'private', 'USD', 0, 0, 0, 'creche', [], '', 0, 0, '', '', 0, '');
        this.showOptions = new ng2_cloudinary_1.CloudinaryOptions({ cloud_name: "peictt", width: 150, height: 150 });
        this.cloudinaryOptions = new ng2_cloudinary_1.CloudinaryOptions({ cloud_name: 'peictt', autoUpload: true, upload_preset: 'schoolMaps' });
        this.uploader = new ng2_cloudinary_1.CloudinaryUploader(this.cloudinaryOptions);
    }
    NewSchoolComponent.prototype.resetImage = function () {
        this.imageUploaded = false;
        this.cloudinaryImage = {};
        console.log("reseting Image");
    };
    NewSchoolComponent.prototype.registerSchool = function (form) {
        this.storeChecked();
        console.log(this.newSchool);
    };
    NewSchoolComponent.prototype.storeChecked = function () {
        this.newSchool.all_property = [];
        var properties = $('.properties');
        for (var index in properties) {
            var property = properties[index];
            if ((typeof property.checked !== "undefined") && (property.checked)) {
                // console.log(property);
                this.newSchool.all_property.push(property.value);
            }
        }
    };
    /*
    initSubmitMap(latitude: number,longitude: number): any {
      let mapCenter = new google.maps.LatLng(latitude,longitude);
      let mapOptions = {
        zoom: 14,
        center: mapCenter,
        disableDefaultUI: false
      };
      let mapElement = document.getElementById('submit-map');
      let map = new google.maps.Map(mapElement, mapOptions);
      let marker = new MarkerWithLabel({
        position: mapCenter,
        map: map,
        icon: 'assets/img/marker-h.png',
        labelAnchor: new google.maps.Point(50, 0),
        draggable: true
      });
    
      $('#submit-map').removeClass('fade-map');
      google.maps.event.addListener(marker, "mouseup", function (event: any) {
        let latitude = this.position.lat();
        let longitude = this.position.lng();
        $('#latitude').val( this.position.lat() );
        $('#longitude').val( this.position.lng() );
      });
    
      //Autocomplete
      let input: any = /** @type {HTMLInputElement} ( document.getElementById('address-map') );
      let autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        let place = autocomplete.getPlace();
        if (!place.geometry) {
          return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(15);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        $('#latitude').val( marker.getPosition().lat() );
        $('#longitude').val( marker.getPosition().lng() );
        let address = '';
        if (place.address_components) {
          address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }
      });
    }
    
    success(position: any) {
          this.initSubmitMap(position.coords.latitude, position.coords.longitude);
          $('#latitude').val( position.coords.latitude );
          $('#longitude').val( position.coords.longitude );
      }
  
    */
    NewSchoolComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.uploader.onBeforeUploadItem = function (fileItem) {
            _this._notify.info("Info", "Upload in progress");
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this._notify.error("Error", "Upload Completed");
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.cloudinaryImage = JSON.parse(response);
            _this.newSchool.featured_image = _this.image_public_id = _this.cloudinaryImage.public_id;
            _this._notify.success("Success", "Upload successful", { timeOut: 2000 });
            _this.imageUploaded = true;
            return { item: item, response: response, status: status, headers: headers };
        };
        $('.selection').selectize({ sortField: 'text' });
        $(".selectize-input input").attr('readonly', 'readonly');
        //  iCheck
        // if ($('.switch').length > 0) {
        //     $('.switch input').iCheck();
        // }
        // if ($('.radio').length > 0) {
        //     $('input').iCheck();
        // }
        // if ($('.checkbox').length > 0) {
        //     $('input:not(.no-icheck)').iCheck();
        // }
        // google.maps.event.addDomListener(window, 'load', this.initSubmitMap(this.latitude, this.longitude));
    };
    NewSchoolComponent = __decorate([
        core_1.Component({
            templateUrl: "app/new_school/new.school.component.html"
        }), 
        __metadata('design:paramtypes', [angular2_notifications_1.NotificationsService])
    ], NewSchoolComponent);
    return NewSchoolComponent;
}());
exports.NewSchoolComponent = NewSchoolComponent;
//# sourceMappingURL=new.school.component.js.map