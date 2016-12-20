import { Component, OnInit, AfterViewChecked, ElementRef } from "@angular/core";
var carousel = require('./owl-carousel-index.js');

@Component({
	selector: 'school-owl',
	templateUrl: './template.html'
})

export class OwlCarouselDirective implements AfterViewChecked, OnInit {
	constructor(public el: ElementRef){}

	ngAfterViewChecked() {
		carousel();
	}

	ngOnInit() {}
}


