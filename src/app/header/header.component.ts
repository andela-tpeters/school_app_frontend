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
  }

  ngOnInit() {
  }
}
