import { Component, AfterViewInit, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LoginService } from '../modals/login/login.service';
import 'selectize';

@Component({
  selector: "sheader",
  templateUrl: "./header.component.html",
  providers: [LoginService]
})

export class HeaderComponent implements AfterViewInit, OnInit {
  public isLoggedIn: boolean;

  constructor(
    private _loginService: LoginService
  ){
    this.isLoggedIn = this._loginService.isLoggedIn();
  }

  logout() {
    this._loginService.logout();
    window.location.reload()
  }

  ngAfterViewInit() { 
    require("imports?$=jquery!./menu.js");
  }

  ngOnInit() {
    // require("imports?$=jquery!../../../public/assets/bootstrap/js/bootstrap.js");
    // require("imports?$=jquery!../../../public/assets/js/owl.carousel.js");
    // require("imports?$=jquery!../../../public/assets/js/jquery.raty.min.js");
    // require("imports?$=jquery!../../../public/assets/js/masonry.pkgd.min.js");
  }
}
