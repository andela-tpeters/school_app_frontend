import { Component, AfterViewInit, OnInit } from "@angular/core";
import * as faker from "faker";
import '../../../public/assets/css/jquery.slider.min.css';

@Component({
  templateUrl: "./search.component.html"
})

export class SearchComponent implements AfterViewInit, OnInit {
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


  ngAfterViewInit() {
    // require("imports?$=jquery!../../../public/assets/js/c.js");
    // require("./search_map.js");
  }

  ngOnInit() {
    // require("imports?$=jquery!../../../public/assets/js/jquery.slider.js");
    // require("imports?$=jquery!../../../public/assets/bootstrap/js/bootstrap.js");
    // require("imports?$=jquery!../../../public/assets/js/owl.carousel.js");
  }
}
