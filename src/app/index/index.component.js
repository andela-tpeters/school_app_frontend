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
var schools_service_1 = require("../services/schools.service");
var platform_browser_1 = require("@angular/platform-browser");
var $ = require("jquery");
var faker = require("faker");
require("selectize");
require("owlcarousel");
var IndexComponent = (function () {
    function IndexComponent(schoolService, _sanitizer) {
        this._sanitizer = _sanitizer;
        this.pageTitle = "Index";
        this.testimonials_count = $('.testimonials-carousel').find('.item').length;
        this.countries = [];
        this.homepageImage = faker.image.image();
        this.schools = schoolService.get_schools();
        this.getCountries();
    }
    IndexComponent.prototype.getCountries = function () {
        for (var i = 0; i <= 5; i++) {
            this.countries.push({
                image: faker.image.image(),
                name: faker.address.state(),
                schools: faker.random.number()
            });
        }
    };
    IndexComponent.prototype.setCarouselWidth = function () {
        $('.carousel-full-width').css('width', $(window).width());
    };
    // Owl Carousel
    // Disable click when dragging
    IndexComponent.prototype.disableClick = function () {
        $('.owl-carousel .property').css('pointer-events', 'none');
    };
    // Enable click after dragging
    IndexComponent.prototype.enableClick = function () {
        $('.owl-carousel .property').css('pointer-events', 'auto');
    };
    IndexComponent.prototype.ngAfterViewInit = function () {
        $('.selection').selectize({ sortField: 'text' });
        $(".selectize-input input").attr('readonly', 'readonly');
        if ($('.owl-carousel').length > 0) {
            if ($('.carousel-full-width').length > 0) {
                this.setCarouselWidth();
            }
            if (this.testimonials_count <= 1) {
                this.t_f_test = false;
            }
            else {
                this.t_f_test = true;
            }
            $(".testimonials-carousel").owlCarousel({
                items: 1,
                responsiveBaseWidth: ".testimonial",
                pagination: true,
                nav: this.t_f_test,
                slideSpeed: 700,
                loop: this.t_f_test,
                touchDrag: this.t_f_test,
                mouseDrag: this.t_f_test,
                navText: [
                    "<i class='fa fa-chevron-left'></i>",
                    "<i class='fa fa-chevron-right'></i>"
                ],
            });
        }
    };
    IndexComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/index/index.component.html',
            providers: [schools_service_1.SchoolService]
        }), 
        __metadata('design:paramtypes', [schools_service_1.SchoolService, platform_browser_1.DomSanitizer])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map