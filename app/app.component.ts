import { Component, AfterContentInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'school-index',
  templateUrl: "app/app.component.html"
})


export class AppComponent implements AfterContentInit {
  pageTitle: string = "School Management";
  options = {};

  ngAfterContentInit() {
    $('.selection').selectize({sortField: 'text'});
    $(".selectize-input input").attr('readonly','readonly');
    var $preloader = $('#page-preloader');
    $preloader.fadeOut('slow');
    var $spinner = $preloader.find('.gps_ring');
    var $spinner2 = $preloader.find('.gps_ring2');
    $spinner.fadeOut();
    $spinner2.fadeOut();
  }
}
