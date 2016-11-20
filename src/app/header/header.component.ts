import { Component, AfterViewInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LoginService } from '../modals/login/login.service';
import 'selectize';

@Component({
  selector: "sheader",
  templateUrl: "./header.component.html",
  providers: [LoginService]
})

export class HeaderComponent implements AfterViewInit {
  public isLoggedIn: boolean;

  constructor(
    private _loginService: LoginService
  ){
    this.isLoggedIn = this._loginService.isLoggedIn();
  }

  logout() {
    this._loginService.logout();
    window.location.reload()
  }

  ngAfterViewInit() {
      $('.selection').selectize({sortField: 'text'});
      $(".selectize-input input").attr('readonly','readonly');

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
             setTimeout(function() {
                 $('.secondary.main-menu').addClass("smooth-remove");
             }, 100);
             setTimeout(function() {
                 $('.secondary.main-menu').removeClass("open smooth-remove");
             }, 500);
             setTimeout(function() {
                 $('.drop-left, .primary.main-menu>ul').removeClass("hidden");
                 $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
             }, 600);
             setTimeout(function() {
                 $('.primary.main-menu>ul').addClass("smooth");
             }, 620);
         }
         //pressing more
         else {
             $('.primary.main-menu, .drop-left').addClass("smooth-remove");
             $('.secondary.open li').css('opacity', '0');
             setTimeout(function() {
                 $('.drop-left, .primary.main-menu>ul').addClass("hidden");
                 $('.drop-close, .secondary.main-menu>ul').removeClass("hidden");
                 $('.primary.main-menu').removeClass("smooth-remove");
                 $('.drop-left').removeClass("smooth-remove");
                 $('.primary.main-menu>ul').removeClass("smooth");
             }, 300 );
             $('.blog-nv .secondary>ul, .blog-mn .secondary>ul').removeClass("hidden");
             setTimeout(function() {
                 $('.secondary.main-menu>ul').addClass("smooth");
             }, 350 );
         }
     });


     $('.wrapper').on('click', function (e) {
        if ($('.secondary').hasClass("open")) {
            $('.drop-left, .primary.main-menu>ul').removeClass("hidden");
            $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
            setTimeout(function() {
                $('.primary.main-menu>ul').addClass("smooth");
                $('.drop-close, .secondary.main-menu>ul').removeClass("smooth");
            }, 100);
        }
    });

    // Sliding submenu in mobile menu
    $( '.navigation .site-header .mob-menu li.has-child>a' ).on('touchstart click', function (e) {
      e.preventDefault();
      var $t=$(this).parent();
      if(!($t).hasClass("opened")) {
            $('.mob-menu .child-navigation').slideUp( "fast" );
            $('.mob-menu .child-navigation').parent().removeClass("opened");
            $($t).addClass("opened");
            $($t).children('.mob-menu .child-navigation').slideToggle( "fast" );
        } else {
            $('.mob-menu .child-navigation').slideUp( "fast" );
            $('.mob-menu .child-navigation').parent().removeClass("opened");
        }
    });

    $( '.navigation .container li.has-child>a' ).on('touchstart click', function (e) {
        e.preventDefault();
        var $t=$(this).parent();
        $($t).children('.child-navigation').slideDown( "fast" );
    });
  }
}
