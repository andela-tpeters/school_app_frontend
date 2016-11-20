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
var $ = require("jquery");
require('bootstrapslider');
var AllSchoolsComponent = (function () {
    function AllSchoolsComponent() {
    }
    AllSchoolsComponent.prototype.ngAfterContentInit = function () {
        $('.selection').selectize({ sortField: 'text' });
        $(".selectize-input input").attr('readonly', 'readonly');
        //  Price slider search page
        // if( $(".price-input").length > 0) {
        //     $(".price-input").each(function() {
        //         $(this).slider({
        //             from: 0,
        //             to: 9000000,
        //             smooth: true,
        //             round: 0,
        //             dimension: ',00&nbsp;$',
        //         });
        //     });
        // }
    };
    AllSchoolsComponent = __decorate([
        core_1.Component({
            templateUrl: "app/all_schools/all.schools.component.html",
            styleUrls: ["assets/css/jquery.slider.min.css", "assets/css/style.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], AllSchoolsComponent);
    return AllSchoolsComponent;
}());
exports.AllSchoolsComponent = AllSchoolsComponent;
//# sourceMappingURL=all.schools.component.js.map