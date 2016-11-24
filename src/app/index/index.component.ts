import { Component, OnInit } from "@angular/core";
import { SchoolService } from "../services/schools.service";
import { DomSanitizer } from "@angular/platform-browser";
import { STATES } from "../app.constants"
import * as faker from "faker";

@Component({
  templateUrl: './index.component.html',
  providers: [SchoolService]
})

export class IndexComponent implements OnInit {
  pageTitle: string = "Index";
  public schools: any[];
  homepageImage: any;
  public countries: any[];
  public states = STATES;


  constructor(schoolService: SchoolService) {
    this.countries = [];
    this.homepageImage = faker.image.image();
    this.schools = schoolService.get_schools();
    this.getCountries();
  }

  getCountries() {
    for (let i = 0; i <= 5; i++) {
        this.countries.push({
          image: faker.image.image(),
          name: faker.address.state(),
          schools: faker.random.number()
        });
    }
  }

  ngOnInit() {
    // require("imports?$=jquery!./preloader.js");
  }

}
