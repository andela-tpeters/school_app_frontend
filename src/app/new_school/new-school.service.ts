import { Injectable } from "@angular/core";
import { Response, Http, Headers, RequestOptionsArgs } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { NewSchoolModel } from "./new-school.model";
import { NewSchoolUrl } from "../app.constants";
import { LoginService } from "../modals/login/login.service";



@Injectable()



export class NewSchoolService {

  constructor(private http: Http, private loginService: LoginService){}

  header: Headers = new Headers({"Authorization": this.loginService.getToken(), "Accept": "application/json"});

  options = {headers: this.header};

  handleError(err: Response) {
    return Observable.throw(err.json() || "Status Text");
  }

  saveSchool(newSchool: NewSchoolModel): Observable<any> {
    return this.http.post(NewSchoolUrl, newSchool, this.options).map(
      (response) => response.json()
    ).catch(
      this.handleError
    );
  }
}
