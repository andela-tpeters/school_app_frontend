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
var app_constants_1 = require("../app.constants");
var login_service_1 = require("../modals/login/login.service");
var NewSchoolService = (function () {
    // header: Headers = new Headers();
    function NewSchoolService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.header = new http_1.Headers({ "Authorization": this.loginService.getToken(), "Accept": "application/json" });
        this.options = { headers: this.header };
    }
    NewSchoolService.prototype.handleError = function (err) {
        return Observable_1.Observable.throw(err.json() || "Status Text");
    };
    NewSchoolService.prototype.addToken = function () {
        // this.header.append("Authorization", "Bearer " + this.loginService.getToken());
    };
    NewSchoolService.prototype.addJsonHeader = function () {
        // this.header.append();
    };
    NewSchoolService.prototype.saveSchool = function (newSchool) {
        this.addToken();
        this.addJsonHeader();
        console.log(this.header, "header");
        console.log(this.http, "http");
        return this.http.post(app_constants_1.NewSchoolUrl, newSchool, this.options).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    NewSchoolService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, login_service_1.LoginService])
    ], NewSchoolService);
    return NewSchoolService;
}());
exports.NewSchoolService = NewSchoolService;
//# sourceMappingURL=new-school.service.js.map