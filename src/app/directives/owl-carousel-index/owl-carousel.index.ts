import { Component, OnInit, AfterViewChecked, ElementRef } from "@angular/core";


@Component({
	selector: 'school-owl',
	templateUrl: './template.html'
})

export class OwlCarouselDirective implements AfterViewChecked, OnInit {
	constructor(public el: ElementRef){}

	ngAfterViewChecked() {
		require('imports?$=jquery!./owl-carousel-index.js');
	}

	ngOnInit() {
		require("../../../../public/assets/css/owl.carousel.css");
		// require("imports?$=jquery!owl.carousel");
		// require('owl.carousel/dist/assets/owl.carousel.css');
		require("imports?$=jquery!../../../../public/assets/js/owl.carousel.js");
	}
}


