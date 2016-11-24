import { Component, OnInit, AfterViewChecked, ElementRef } from "@angular/core";
import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel";

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
		require("imports?$=jquery!../../../../public/assets/js/owl.carousel.js");
	}
}


