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
var angular2_notifications_1 = require("angular2-notifications");
var utils_1 = require("../../services/utils");
var login_model_1 = require("./login-model");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(_utils, _notify, _loginService) {
        this._utils = _utils;
        this._notify = _notify;
        this._loginService = _loginService;
        this.options = {};
        this.user = new login_model_1.Login('', '');
        this.isLoggedIn = this._loginService.isLoggedIn();
    }
    LoginComponent.prototype.onSuccess = function (res) {
        this._notify.success("Success: ", "Login Successful");
        window.sessionStorage.setItem("token", res.token);
        setTimeout(function () { return window.location.reload(); }, 2500);
    };
    LoginComponent.prototype.onError = function (err) {
        this._notify.error("Error Occured: ", err.message);
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.isLoggedIn) {
            this._notify.info("Info", "You are logged in");
            return;
        }
        this._loginService.login(this.user)
            .subscribe(function (res) { return _this.onSuccess(res); }, function (err) { return _this.onError(err); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "sm-login-modal",
            templateUrl: "app/modals/login/login.component.html",
            providers: [utils_1.Utils, angular2_notifications_1.NotificationsService, login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [utils_1.Utils, angular2_notifications_1.NotificationsService, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map