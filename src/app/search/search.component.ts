import { Component, AfterContentInit, OnInit } from "@angular/core";
import * as faker from "faker";
require('../../../public/assets/css/jquery.slider.min.css');
var customMap = require('./createHomepageGoogleMap.js');

var sliderpoint = require('./input-slider.js');


@Component({
  templateUrl: "./search.component.html"
})

export class SearchComponent implements AfterContentInit, OnInit {
  public schools: any[] = [];

  constructor() {
    this.searchResult();
  }

  searchResult() {
    for(let i = 1; i <= 20; i++) {
      this.schools.push({
        name: faker.company.companyName(),
        address: faker.address.streetAddress() + ", " + faker.address.state(),
        classrooms: faker.random.number(),
        image: faker.image.image()
      })
    }
  }


  ngAfterContentInit() {
    var _latitude = 40.717857;
    var _longitude = -73.995042;
    customMap(_latitude,_longitude);
  }

  ngOnInit() {
    $('.jslider-pointer').addClass('firstpoint'); 
    $('.jslider-pointer.jslider-pointer-to').removeClass('firstpoint'); 

    $(".price-range-wrapper").mousemove(sliderpoint);

    
  }
}
