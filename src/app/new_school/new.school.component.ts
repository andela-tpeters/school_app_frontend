import { Component, AfterViewInit } from "@angular/core";
import { RouterLink, Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { NewSchoolModel } from "./new-school.model";
import { CloudinaryUploader, CloudinaryOptions } from "ng2-cloudinary-peictt";
import { NotificationsService, SimpleNotificationsComponent } from "angular2-notifications";
import { TYPE, CURRENCY, OWNED_BY, CONDITION, PAYMENT_INTERVAL, STATES, PROPERTIES } from "../app.constants";
import { PictureModel } from "../services/picture.model";
import { NewSchoolService } from "./new-school.service";

@Component({
  templateUrl: "./new.school.component.html",
  providers: [NewSchoolService]
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
  newSchool: NewSchoolModel = new NewSchoolModel('','','','','','','','','',0,0,0,'',[],'',0,0,'','',0,'',[]);
  showOptions: CloudinaryOptions = new CloudinaryOptions({cloud_name: "peictt", width: 150, height: 150});
  cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({cloud_name: 'peictt', autoUpload: true, upload_preset: 'schoolMaps'});


  uploader: CloudinaryUploader = new CloudinaryUploader(this.cloudinaryOptions);

  constructor(private _notify: NotificationsService, private newSchoolService: NewSchoolService, private router: Router) {}

  resetImage() {
    this.imageUploaded = false;
    this.newSchool.pictures_attributes = [];
    this.cloudinaryImage = {};
    console.log("reseting Image");
  }

  onSuccess(res: any) {
    this._notify.success("Success", "Good");
    console.log(res);
    this.router.navigate(['/school', res.id]);
  }

  onError(err: any) {
    this._notify.error("Error", "Bad");
    console.log(err);
  }

  registerSchool(form: NgForm) {
    this.storeChecked();
    this.newSchoolService.saveSchool(this.newSchool)
    .subscribe(
      (res) => this.onSuccess(res),
      (err) => this.onError(err)
    );
  }

  storeChecked() {
    this.newSchool.all_property = [];
    let properties = $('.properties');
    for(let index in properties) {
      let property = properties[index];
      if((typeof property.checked !== "undefined") && (property.checked)) {
        this.newSchool.all_property.push(property.value);
      }
    }
  }

  ngAfterViewInit() {

    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      this._notify.info("Info", "Upload in progress");
    };

    this.uploader.onErrorItem = (item: any, response: string, status: number, headers: any) => {
      this._notify.error("Error", "Upload Completed");
    };

    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      this.cloudinaryImage = JSON.parse(response);
      this.image_public_id = this.cloudinaryImage.public_id;
      this.newSchool.pictures_attributes.push({url: this.cloudinaryImage.public_id, picture_type: "school_picture"});
      this.imageUploaded = true;
      this._notify.success("Success", "Upload successful", { timeOut: 2000 });
      return { item, response, status, headers }
    };


  }

}
