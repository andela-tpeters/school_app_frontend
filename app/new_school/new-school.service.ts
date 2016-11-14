import { Injectable } from "@angular/core";
import { Response, Http, Headers, RequestOptionsArgs } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { NewSchoolModel } from "./new-school.model";
import { NewSchoolUrl } from "../app.constants";
import { LoginService } from "../modals/login/login.service";



@Injectable()



export class NewSchoolService {
  // header: Headers = new Headers();

  constructor(private http: Http, private loginService: LoginService){}

  header: Headers = new Headers({"Authorization": this.loginService.getToken(), "Accept": "application/json"});

  options = {headers: this.header};

  handleError(err: Response) {
    return Observable.throw(err.json() || "Status Text");
  }

  addToken() {
    // this.header.append("Authorization", "Bearer " + this.loginService.getToken());
  }

  addJsonHeader() {
    // this.header.append();
  }

  saveSchool(newSchool: NewSchoolModel): Observable<any> {
    this.addToken();
    this.addJsonHeader();
    console.log(this.header, "header");
    console.log(this.http, "http");
    return this.http.post(NewSchoolUrl, newSchool, this.options).map(
      (response) => response.json()
    ).catch(
      this.handleError
    );
  }
}
