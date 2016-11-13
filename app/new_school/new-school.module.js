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
var common_1 = require("@angular/common");
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ng2_cloudinary_1 = require('ng2-cloudinary');
var new_school_component_1 = require("./new.school.component");
var new_school_routing_module_1 = require("./new-school.routing.module");
var angular2_notifications_1 = require("angular2-notifications");
var NewSchoolModule = (function () {
    function NewSchoolModule() {
    }
    NewSchoolModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                new_school_routing_module_1.NewSchoolRoutingModule,
                ng2_cloudinary_1.Ng2CloudinaryModule,
                angular2_notifications_1.SimpleNotificationsModule
            ],
            declarations: [new_school_component_1.NewSchoolComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NewSchoolModule);
    return NewSchoolModule;
}());
exports.NewSchoolModule = NewSchoolModule;
//# sourceMappingURL=new-school.module.js.map