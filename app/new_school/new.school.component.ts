import { Component, AfterViewInit } from "@angular/core";
import { RouterLink } from '@angular/router';
import { NgForm } from "@angular/forms";
import { NewSchool } from "./new-school.model";
import * as $ from "jquery";
import 'icheck';
import { CloudinaryUploader, CloudinaryOptions } from "ng2-cloudinary";
import { NotificationsService, SimpleNotificationsComponent } from "angular2-notifications";
import { TYPE, CURRENCY, OWNED_BY, CONDITION, PAYMENT_INTERVAL, STATES, PROPERTIES } from "../app.constants";

@Component({
  templateUrl: "app/new_school/new.school.component.html"
})

export class NewSchoolComponent implements AfterViewInit {
  states = STATES;
  schoolType = TYPE;
  owners = OWNED_BY;
  currency = CURRENCY;
  conditions = CONDITION;
  payment_intervals = PAYMENT_INTERVAL;
  properties = PROPERTIES;
  cloudinaryImage: any;
  latitude = 40.719457;
  longitude = -73.989642;
  image_public_id: string;
  imageUploaded: boolean = false;
  notifyOptions = {maxStack: 1, showProgressBar: true};
  newSchool: NewSchool = new NewSchool('LGA','FEE','23401','Surulere','School Name','Lagos','Nigeria','private','USD',0,0,0,'creche',[],'',0,0,'','',0,'');
  showOptions: CloudinaryOptions = new CloudinaryOptions({cloud_name: "peictt", width: 150, height: 150});
  cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({cloud_name: 'peictt', autoUpload: true, upload_preset: 'schoolMaps'});


  uploader: CloudinaryUploader = new CloudinaryUploader(this.cloudinaryOptions);

  constructor(private _notify: NotificationsService) {}

  resetImage() {
    this.imageUploaded = false;
    this.cloudinaryImage = {};
    console.log("reseting Image");
  }

  registerSchool(form: NgForm) {
    this.storeChecked();
    console.log(this.newSchool);
  }

  storeChecked() {
    this.newSchool.all_property = [];
    let properties = $('.properties');
    for(let index in properties) {
      let property = properties[index];
      if((typeof property.checked !== "undefined") && (property.checked)) {
        // console.log(property);
        this.newSchool.all_property.push(property.value);
      }
    }
  }

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

  ngAfterViewInit() {

    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      this._notify.info("Info", "Upload in progress");
    };

    this.uploader.onErrorItem = (item: any, response: string, status: number, headers: any) => {
      this._notify.error("Error", "Upload Completed");
    };

    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      this.cloudinaryImage = JSON.parse(response);
      this.newSchool.featured_image = this.image_public_id = this.cloudinaryImage.public_id;
      this._notify.success("Success", "Upload successful", { timeOut: 2000 });
      this.imageUploaded = true;
      return { item, response, status, headers }
    };

    $('.selection').selectize({sortField: 'text'});
    $(".selectize-input input").attr('readonly','readonly');

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

  }

}
