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
var new_user_1 = require("./new_user");
var registration_service_1 = require("./registration.service");
var utils_1 = require("../../services/utils");
var angular2_notifications_1 = require("angular2-notifications");
var RegistrationComponent = (function () {
    function RegistrationComponent(regService, utils, _notify) {
        this.regService = regService;
        this.utils = utils;
        this._notify = _notify;
        this.user = new new_user_1.NewUser('', '', '', 0);
        this.passwordConfirmed = false;
        this.errorOccured = false;
        this.options = {};
    }
    RegistrationComponent.prototype.checkPassword = function () {
        if (this.user.passwordConfirmation === this.user.password) {
            this.passwordConfirmed = true;
        }
        else {
            this.passwordConfirmed = false;
        }
    };
    RegistrationComponent.prototype.handleError = function (err) {
        this.errorOccured = true;
        this.errors = this.utils.objToString(err.errors);
        this._notify.error("Errors", this.errors.join(""));
    };
    RegistrationComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.regService.registerUser(this.user)
            .subscribe(function (result) { return console.log(result); }, function (err) { return _this.handleError(err); });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'sm-register-modal',
            templateUrl: "app/modals/registration/registration.component.html",
            styleUrls: ["assets/css/school.css"],
            providers: [registration_service_1.RegistrationService, utils_1.Utils, angular2_notifications_1.NotificationsService]
        }), 
        __metadata('design:paramtypes', [registration_service_1.RegistrationService, utils_1.Utils, angular2_notifications_1.NotificationsService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map