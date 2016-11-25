import { Component, OnInit, AfterContentInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { SingleSchoolService } from "./single-school.service";
import { NewSchoolModel } from "../new_school/new-school.model";
import { PROPERTIES } from "../app.constants";
import { Utils } from "../services/utils";

@Component({
	templateUrl: "./single-school.component.html",
	providers: [SingleSchoolService]
})

export class SingleSchoolComponent implements OnInit, AfterContentInit {
	public school: any;
	public utils = new Utils();
	public properties: {}[] = PROPERTIES;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private schService: SingleSchoolService
		)
	{}

	onSuccess(res: any) {
		this.school = res;
	}

	onError(err: any) {
		this.router.navigate(["/404"]);
	}


	getSchool(id: number) {
		this.schService.getSchool(id)
					   .subscribe(
					   	(res) => this.onSuccess(res),
					   	(err) => this.onError(err)
					   	);
	}

	ngAfterContentInit() {
		require("imports?$=jquery!./picture_slider.js");
		require("imports?$=jquery,markerwithlabel!./map.js");
		// require("imports?$=jquery!../../../public/assets/js/custom-map.js");
		require("imports?$=jquery!../../../public/assets/js/c.js");
	}


	ngOnInit() {
		require("imports?$=jquery!../../../public/assets/bootstrap/js/bootstrap.js");
		require("imports?$=jquery!../../../public/assets/js/jquery.raty.min.js");
		require("imports?$=jquery!../../../public/assets/js/owl.carousel.js");

		this.route.data.subscribe((data: { school: NewSchoolModel}) => {
			this.school = data.school;
			console.log(this.school);
		})
	}

}