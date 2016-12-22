import { Component, AfterContentInit, OnInit, AfterContentChecked } from "@angular/core";
import * as faker from "faker";
import { Router, ActivatedRoute} from "@angular/router";
import { NewSchoolModel } from "../new_school/new-school.model";

require('../../../public/assets/css/jquery.slider.min.css');
var customMap = require('./createHomepageGoogleMap.js');

var sliderpoint = require('./input-slider.js');
var preloader = require('../index/preloader.js');


@Component({
  templateUrl: "./search.component.html"
})

export class SearchComponent implements AfterContentInit, OnInit, AfterContentChecked {
  public schools: any;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  searchResult() {
    
  }


  ngAfterContentInit() {
    var _latitude = 40.717857;
    var _longitude = -73.995042;
    customMap(_latitude,_longitude);
    $('.jslider-pointer').addClass('firstpoint'); 
    $('.jslider-pointer.jslider-pointer-to').removeClass('firstpoint'); 

    $(".price-range-wrapper").mousemove(sliderpoint);

  }

  ngAfterContentChecked() {
    preloader.fade();
  }

  ngOnInit() {

    this.route.data.subscribe((data: { schools: NewSchoolModel[]}) => {
      this.schools = data.schools;
    },(err) => { console.log(err)})
  }
}
