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
var login_service_1 = require('../modals/login/login.service');
var HeaderComponent = (function () {
    function HeaderComponent(_loginService) {
        this._loginService = _loginService;
        this.isLoggedIn = this._loginService.isLoggedIn();
    }
    HeaderComponent.prototype.logout = function () {
        this._loginService.logout();
        window.location.reload();
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        $('.selection').selectize({ sortField: 'text' });
        $(".selectize-input input").attr('readonly', 'readonly');
        // Menu Button
        $('.navbar a.drop-left, .navbar a.drop-close').on('click', function (e) {
            // e.preventDefault();
            //pressing more first time
            if ($('.start').length > 0) {
                $('.primary.main-menu').removeClass("start");
                $('.primary.main-menu>ul').addClass("smooth");
                $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
            }
            //pressing close
            if ($('.drop-left').hasClass("hidden")) {
                $('.secondary.main-menu').addClass("open");
                $('.secondary.open li').css('opacity', '1');
                $('.blog-nv .secondary>ul, .blog-mn .secondary>ul').removeClass("hidden");
                $('.secondary.main-menu>ul').removeClass("smooth");
                setTimeout(function () {
                    $('.secondary.main-menu').addClass("smooth-remove");
                }, 100);
                setTimeout(function () {
                    $('.secondary.main-menu').removeClass("open smooth-remove");
                }, 500);
                setTimeout(function () {
                    $('.drop-left, .primary.main-menu>ul').removeClass("hidden");
                    $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
                }, 600);
                setTimeout(function () {
                    $('.primary.main-menu>ul').addClass("smooth");
                }, 620);
            }
            else {
                $('.primary.main-menu, .drop-left').addClass("smooth-remove");
                $('.secondary.open li').css('opacity', '0');
                setTimeout(function () {
                    $('.drop-left, .primary.main-menu>ul').addClass("hidden");
                    $('.drop-close, .secondary.main-menu>ul').removeClass("hidden");
                    $('.primary.main-menu').removeClass("smooth-remove");
                    $('.drop-left').removeClass("smooth-remove");
                    $('.primary.main-menu>ul').removeClass("smooth");
                }, 300);
                $('.blog-nv .secondary>ul, .blog-mn .secondary>ul').removeClass("hidden");
                setTimeout(function () {
                    $('.secondary.main-menu>ul').addClass("smooth");
                }, 350);
            }
        });
        $('.wrapper').on('click', function (e) {
            if ($('.secondary').hasClass("open")) {
                $('.drop-left, .primary.main-menu>ul').removeClass("hidden");
                $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
                setTimeout(function () {
                    $('.primary.main-menu>ul').addClass("smooth");
                    $('.drop-close, .secondary.main-menu>ul').removeClass("smooth");
                }, 100);
            }
        });
        // Sliding submenu in mobile menu
        $('.navigation .site-header .mob-menu li.has-child>a').on('touchstart click', function (e) {
            e.preventDefault();
            var $t = $(this).parent();
            if (!($t).hasClass("opened")) {
                $('.mob-menu .child-navigation').slideUp("fast");
                $('.mob-menu .child-navigation').parent().removeClass("opened");
                $($t).addClass("opened");
                $($t).children('.mob-menu .child-navigation').slideToggle("fast");
            }
            else {
                $('.mob-menu .child-navigation').slideUp("fast");
                $('.mob-menu .child-navigation').parent().removeClass("opened");
            }
        });
        $('.navigation .container li.has-child>a').on('touchstart click', function (e) {
            e.preventDefault();
            var $t = $(this).parent();
            $($t).children('.child-navigation').slideDown("fast");
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "sheader",
            templateUrl: "app/header/header.component.html",
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map