import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { SchoolPropertiesUrl, GetSchoolUrl } from '../app.constants';
import * as faker from "faker";
import {Utils} from "./utils";

@Injectable()

export class SchoolService {
  private utils: Utils = new Utils();
  public schools: any[] = [];

  constructor(private http: Http){}

  private header: Headers = this.utils.makeHeader(this.http);

  private options = { headers: this.header }

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

  handleError(err: any) {
    return Observable.throw(err.json() || "Error Status");
  }

  getSchoolsForIndex(): Observable<any> {
    return this.http.get(SchoolPropertiesUrl, this.options)
            .map((res) => res.json())
            .catch((err) => this.handleError(err))
  }

  searchSchools(params: any): Observable<any> {
    return this.http.get(GetSchoolUrl + "?" + params, this.options).map((res) => res.json()).catch((err) => this.handleError(err));
  }
}
