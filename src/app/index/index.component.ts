import { Component, OnInit } from "@angular/core";
import { SchoolService } from "../services/schools.service";
import { DomSanitizer } from "@angular/platform-browser";
import * as faker from "faker";
import 'owl.carousel/dist/assets/owl.carousel.css';
import * as $ from 'jquery';
import 'owl.carousel';

@Component({
  templateUrl: './index.component.html',
  providers: [SchoolService]
})

export class IndexComponent implements OnInit {
  pageTitle: string = "Index";
  public schools: any[];
  homepageImage: any;
  public countries: any[];
  t_f_test: any;
  testimonials_count: number = $('.testimonials-carousel').find('.item').length;


  constructor(schoolService: SchoolService, private _sanitizer: DomSanitizer) {
    this.countries = [];
    this.homepageImage = faker.image.image();
    this.schools = schoolService.get_schools();
    this.getCountries();
  }

  getCountries() {
    for (let i = 0; i <= 5; i++) {
        this.countries.push({
          image: faker.image.image(),
          name: faker.address.state(),
          schools: faker.random.number()
        });
    }
  }

  setCarouselWidth(){
    $('.carousel-full-width').css('width', $(window).width());
  }

  // Owl Carousel
  // Disable click when dragging
  disableClick(){
    $('.owl-carousel .property').css('pointer-events', 'none');
  }
  // Enable click after dragging
  enableClick(){
    $('.owl-carousel .property').css('pointer-events', 'auto');
  }

  ngOnInit() {
    // $('.selection').selectize({sortField: 'text'});
    // $(".selectize-input input").attr('readonly','readonly');


    // if ($('.owl-carousel').length > 0) {
    //     if ($('.carousel-full-width').length > 0) {
    //         this.setCarouselWidth();
    //     }

    //     if ( this.testimonials_count <= 1 ) {
    //         this.t_f_test = false;
    //     } else {
    //         this.t_f_test = true;
    //     }
    //     $(".testimonials-carousel").owlCarousel({
    //         items: 1,
    //         responsiveBaseWidth: ".testimonial",
    //         pagination: true,
    //         nav:this.t_f_test,
    //         slideSpeed : 700,
    //         loop:this.t_f_test,
    //         touchDrag:this.t_f_test,
    //         mouseDrag:this.t_f_test,
    //         navText: [
    //         "<i class='fa fa-chevron-left'></i>",
    //         "<i class='fa fa-chevron-right'></i>"
    //         ],
    //     });
    // }


    
 }

}
