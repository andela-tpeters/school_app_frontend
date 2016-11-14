import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { LoginUrl } from "../../app.constants";
import { Login } from "./login-model";

@Injectable()

export class LoginService {

  private token = window.sessionStorage.getItem("token");

  constructor(
    private http: Http
  ){}

  isLoggedIn(): boolean {
    return this.token ? true : false;
  }

  logout() {
    window.sessionStorage.removeItem("token");
  }

  getToken() {
    return this.token;
  }

  handleError(err: Response) {
    return Observable.throw(err.json() || "Status Error");
  }

  login(user: Login): Observable<any> {
    return this.http.post(LoginUrl, user)
                .map((res: Response) => res.json())
                .catch(this.handleError)
  }

}
