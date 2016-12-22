import { Component, OnInit, AfterContentInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchModel } from "./search-model";
import { TYPE, STATES } from  "../../app.constants";
import { Utils } from "../../services/utils";
import { NotificationsService } from "angular2-notifications";
var preloader = require("../../index/preloader.js");

@Component({
	selector: 'search-directive',
	templateUrl: './search-directive.html',
	providers: [Utils]
})

export class SearchDirective implements OnInit, AfterContentInit {
	public searchModel: SearchModel = new SearchModel('','','');
	public schoolType = TYPE;
	public states = STATES;
	public lgas = [{name: 'surulere', value: 'surulere'}]
	public options = {theClass: 'error-alert', timeOut: 5000, maxStack: 1};

	constructor(private router: Router, private utils: Utils, private _notify: NotificationsService) {}

	submit() {
		let check = this.utils.validateSearchModel(this.searchModel);
		if(check.isCorrect) {
			preloader.show();
			this.router.navigate(['/search', { q: this.searchModel.q, schtype: this.searchModel.schtype, lga: this.searchModel.lga}]);
		} else {
			this._notify.html("<h3>Error: </h3>"+check.errors.join('<br />'), '');
		}
	}

	ngAfterContentInit() {}

	ngOnInit() {}
}