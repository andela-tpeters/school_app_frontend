import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NotificationsService, SimpleNotificationsComponent } from "angular2-notifications";
import { Utils } from "../../services/utils";
import { Login } from "./login-model";
import { LoginService } from "./login.service";

@Component({
  selector: "sm-login-modal",
  templateUrl: "./login.component.html",
  providers: [Utils, NotificationsService, LoginService]
})

export class LoginComponent {
  public options = {};
  public user = new Login('','');
  public isLoggedIn: boolean;

  constructor(
    private _utils: Utils,
    private _notify: NotificationsService,
    private _loginService: LoginService
  ){
    this.isLoggedIn = this._loginService.isLoggedIn();
  }

  onSuccess(res: any) {
    this._notify.success("Success: ", "Login Successful");
    window.sessionStorage.setItem("token",res.token);
    setTimeout(() => window.location.reload(), 2500);
  }

  onError(err: any) {
    this._notify.error("Error Occured: ", err.message);
  }

  onSubmit(form: NgForm) {
    if(this.isLoggedIn) {
      this._notify.info("Info", "You are logged in");
      return;
    }
    this._loginService.login(this.user)
      .subscribe(
        res => this.onSuccess(res),
        err => this.onError(err)
      )
  }
}
