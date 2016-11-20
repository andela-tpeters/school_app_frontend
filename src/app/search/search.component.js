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
var $ = require('jquery');
// import { Ng2PaginationModule } from "ng2pagination";
var faker = require("faker");
var SearchComponent = (function () {
    function SearchComponent() {
        this.schools = [];
        // console.log(Ng2PaginationModule);
        this.searchResult();
    }
    SearchComponent.prototype.searchResult = function () {
        for (var i = 1; i <= 20; i++) {
            this.schools.push({
                name: faker.company.companyName(),
                address: faker.address.streetAddress() + ", " + faker.address.state(),
                classrooms: faker.random.number(),
                image: faker.image.image()
            });
        }
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        $('.selection').selectize({ sortField: 'text' });
        $(".selectize-input input").attr('readonly', 'readonly');
        //  Price slider search page
        if ($(".price-input").length > 0) {
            $(".price-input").each(function () {
                // let vSLider = $(this).slider({
                //     from: 0,
                //     to: 9000000,
                //     smooth: true,
                //     round: 0,
                //     dimension: ',00&nbsp;$',
                // });
            });
        }
        //Search page hidden content
        $('#toggle-link').on('click', function (e) {
            var $message = $('#hidden_content');
            if ($message.css('display') != 'block') {
                $message.show();
                var firstClick_1 = true;
                $(document).bind('click.myEvent', function (e) {
                    if (!firstClick_1 && $(e.target).closest('#hidden_content').length == 0) {
                        $message.hide();
                        $(document).unbind('click.myEvent');
                    }
                    firstClick_1 = false;
                });
            }
            e.preventDefault();
        });
        //  iCheck
        if ($('.switch').length > 0) {
            $('.switch input').iCheck();
        }
        if ($('.radio').length > 0) {
            $('input').iCheck();
        }
        if ($('.checkbox').length > 0) {
            $('input:not(.no-icheck)').iCheck();
        }
        // Property page tabs
        $('.tabs .tab-links a').on('click', function (e) {
            var currentAttrValue = $(this).attr('href');
            var priceSlider = $('.jslider').detach();
            $('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            priceSlider.appendTo($('.tabs ' + currentAttrValue).find('.price-range-wrapper'));
            priceSlider = null;
            e.preventDefault();
        });
        function sliderpoint() {
            var slider_width = parseInt($(".jslider").css('width'), 10);
            var right_point = parseInt($(".jslider-pointer.jslider-pointer-to").css('left'), 10);
            var left_point = parseInt($(".firstpoint").css('left'), 10);
            left_point = 100 * left_point / slider_width;
            right_point = 100 * right_point / slider_width;
            if (right_point > 97) {
                $('.jslider-pointer.jslider-pointer-to').addClass('slide-right');
            }
            if (right_point <= 97) {
                $('.jslider-pointer.jslider-pointer-to').removeClass('slide-right');
            }
            if (left_point > 97) {
                $('.firstpoint').addClass('slide-right');
            }
            if (left_point <= 97) {
                $('.firstpoint').removeClass('slide-right');
            }
        }
        $('.jslider-pointer').addClass('firstpoint');
        $('.jslider-pointer.jslider-pointer-to').removeClass('firstpoint');
        $(".price-range-wrapper").mousemove(sliderpoint);
    };
    SearchComponent = __decorate([
        core_1.Component({
            templateUrl: "app/search/search.component.html",
            styleUrls: ["assets/css/jquery.slider.min.css", "assets/css/style.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map