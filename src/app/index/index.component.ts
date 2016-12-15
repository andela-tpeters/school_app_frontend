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
  public pageTitle: string = "Index";
  public schools: any[];
  public homepageImage: any;
  public countries: any[];
  public states = STATES;


  constructor(private schoolService: SchoolService) {}

  pruneCountries(objArr: any) {
    let pruneData: any = [];
    for (let i in objArr) {
      if(!pruneData[i]) {
        this.schools = this.schools.concat(objArr[i]);
        pruneData.push({
          image: faker.image.image(),
          name: i.replace(/(^[a-z])/, function(a) {
            return a.toUpperCase();
          }),
          schools: objArr[i].length
        });
      }
    }
    console.log(this.schools);
    this.countries = pruneData;
  }

  ngOnInit() {
    this.countries = [];
    this.schools = [];
    this.homepageImage = faker.image.image();
    this.schoolService.getSchoolsForIndex().subscribe(
        (res) => this.pruneCountries(res),
        err => console.log(err)
      );
  }

}
