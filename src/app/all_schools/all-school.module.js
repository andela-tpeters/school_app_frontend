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
var all_schools_routing_module_1 = require('./all-schools-routing.module');
var all_schools_component_1 = require('./all.schools.component');
var AllSchoolModule = (function () {
    function AllSchoolModule() {
    }
    AllSchoolModule = __decorate([
        core_1.NgModule({
            imports: [all_schools_routing_module_1.AllSchoolsRoutingModule, common_1.CommonModule],
            declarations: [all_schools_component_1.AllSchoolsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AllSchoolModule);
    return AllSchoolModule;
}());
exports.AllSchoolModule = AllSchoolModule;
//# sourceMappingURL=all-school.module.js.map