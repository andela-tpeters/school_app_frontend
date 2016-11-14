import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { NewSchoolComponent } from "./new.school.component";
import { NewSchoolRoutingModule } from "./new-school.routing.module";
import { SimpleNotificationsModule } from "angular2-notifications";
import { LoginService } from "../modals/login/login.service";

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  CommonModule,
  NewSchoolRoutingModule,
  Ng2CloudinaryModule,
  SimpleNotificationsModule
  ],
  declarations: [ NewSchoolComponent ],
  providers: [LoginService]
})

export class NewSchoolModule {}
