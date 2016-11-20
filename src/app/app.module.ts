import { NgModule }      from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AppComponent }  from './app.component';
import { IndexModule } from './index/index.module';
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./modals/login/login.component";
import { RegistrationComponent } from "./modals/registration/registration.component";
import { FooterComponent } from "./footer/footer.component";
import { NewSchoolModule } from "./new_school/new-school.module";
import { AllSchoolModule } from './all_schools/all-school.module';
import { SearchModule } from './search/search.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { RegistrationService } from './modals/registration/registration.service';
import { SimpleNotificationsModule } from "angular2-notifications";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    IndexModule,
    NewSchoolModule,
    AllSchoolModule,
    SearchModule,
    AboutModule,
    ContactModule,
    HttpModule,
    SimpleNotificationsModule
  ],
  declarations: [ AppComponent, HeaderComponent, LoginComponent, RegistrationComponent, FooterComponent ],
  providers: [RegistrationService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
