import { Component, AfterViewInit } from "@angular/core";
import * as faker from "faker";
import '../../../public/assets/css/selectize.css';

@Component({
  templateUrl: "./search.component.html"
})

export class SearchComponent implements AfterViewInit {
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


  ngAfterViewInit() {}
}
