import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as faker from "faker";

@Injectable()

export class SchoolService {
  public schools: any[] = [];

  constructor(){}

  get_schools(): any[] {
    for(var i = 1; i <= 8; i++) {
      this.schools.push({
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        classrooms: faker.random.number(),
        image: faker.image.image()
      })
    }
    return this.schools;
  }
}
