import { Component } from "@angular/core";
import { NewUser } from "./new_user";
import { RegistrationService } from "./registration.service";
import { NgForm } from "@angular/forms";
import { Utils } from "../../services/utils";
import { SimpleNotificationsComponent } from "angular2-notifications";
import { NotificationsService } from "angular2-notifications";


@Component({
  selector: 'sm-register-modal',
  templateUrl: "./registration.component.html",
  providers: [RegistrationService, Utils, NotificationsService]
})

export class RegistrationComponent {
  public user = new NewUser('','','',0);
  passwordConfirmed: boolean = false;
  public res: any;
  public errorOccured: boolean = false;
  public errors: any;
  public options = {};



  constructor(
    private regService: RegistrationService,
    public utils: Utils,
    private _notify: NotificationsService
  ) {
  }

  checkPassword() {
    if(this.user.passwordConfirmation === this.user.password) {
      this.passwordConfirmed = true;
    } else {
      this.passwordConfirmed = false;
    }
  }

  handleError(err: any) {
    this.errorOccured = true;
    this.errors = this.utils.objToString(err.errors);
    this._notify.error("Errors",this.errors.join(""));
  }

  onSubmit(form: NgForm) {
    this.regService.registerUser(this.user)
      .subscribe(
        result => console.log(result),
        err => this.handleError(err)
      );
  }
}
