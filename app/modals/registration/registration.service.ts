import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { NewUser } from "./new_user";
import { RegistrationUrl } from "../../app.constants";

@Injectable()

export class RegistrationService {
  constructor(private http: Http) {

  }

  handleError(err: Response) {
    return Observable.throw(err.json() || "Status Text");
  }

  registerUser(userDetails: NewUser): Observable<any> {
    return this.http.post(RegistrationUrl, userDetails)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }
}
