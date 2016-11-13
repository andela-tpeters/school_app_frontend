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
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var app_component_1 = require('./app.component');
var index_module_1 = require('./index/index.module');
var header_component_1 = require("./header/header.component");
var login_component_1 = require("./modals/login/login.component");
var registration_component_1 = require("./modals/registration/registration.component");
var footer_component_1 = require("./footer/footer.component");
var new_school_module_1 = require("./new_school/new-school.module");
var all_school_module_1 = require('./all_schools/all-school.module');
var search_module_1 = require('./search/search.module');
var about_module_1 = require('./about/about.module');
var contact_module_1 = require('./contact/contact.module');
var registration_service_1 = require('./modals/registration/registration.service');
var angular2_notifications_1 = require("angular2-notifications");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                common_1.CommonModule,
                index_module_1.IndexModule,
                new_school_module_1.NewSchoolModule,
                all_school_module_1.AllSchoolModule,
                search_module_1.SearchModule,
                about_module_1.AboutModule,
                contact_module_1.ContactModule,
                http_1.HttpModule,
                angular2_notifications_1.SimpleNotificationsModule
            ],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, login_component_1.LoginComponent, registration_component_1.RegistrationComponent, footer_component_1.FooterComponent],
            providers: [registration_service_1.RegistrationService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map