"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var app_constants_1 = require("../../app.constants");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.token = window.sessionStorage.getItem("token");
    }
    LoginService.prototype.isLoggedIn = function () {
        return this.token ? true : false;
    };
    LoginService.prototype.logout = function () {
        window.sessionStorage.removeItem("token");
    };
    LoginService.prototype.getToken = function () {
        return this.token;
    };
    LoginService.prototype.handleError = function (err) {
        return Observable_1.Observable.throw(err.json() || "Status Error");
    };
    LoginService.prototype.login = function (user) {
        return this.http.post(app_constants_1.LoginUrl, user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map