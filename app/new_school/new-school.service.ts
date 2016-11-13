import { Injectable } from "@angular/core";
import { Response, Http, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { NewSchoolModel } from "./new-school.model";
import {} from "../app.constants";



@Injectable()


export class NewSchoolService {
  constructor(private http: Http){}

  handleError(err: Response) {
    return Observable.throw(err.json() || "Status Text");
  }

  saveSchool(newSchool: NewSchoolModel): Observable<any> {
    return this.http.post().map().catch();
  }
}
