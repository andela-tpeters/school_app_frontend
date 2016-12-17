import { Component, AfterContentInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'school-index',
  templateUrl: "./app.component.html"
})


export class AppComponent implements AfterContentInit {
  pageTitle: string = "School Management";
  options = {};

  ngAfterContentInit() {
  	// require("imports?$=jquery!./index/preloader.js");
  }
}
