import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchModel } from "./search-model";
import { TYPE, STATES } from  "../../app.constants";
import { Utils } from "../../services/utils";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: 'search-directive',
	templateUrl: './search-directive.html',
	providers: [Utils]
})

export class SearchDirective implements OnInit {
	public searchModel: SearchModel = new SearchModel('','','');
	public schoolType = TYPE;
	public states = STATES;
	public lgas = [{name: 'surulere', value: 'surulere'}]
	public options = {theClass: 'error-alert', timeOut: 2500, maxStack: 1};

	constructor(private router: Router, private utils: Utils, private _notify: NotificationsService) {}

	submit() {
		let check = this.utils.validateSearchModel(this.searchModel);

		if(check.isCorrect) {
			this.router.navigate(['/search', this.searchModel.q, this.searchModel.schtype, this.searchModel.lga]);
		} else {
			this._notify.html(check.errors.join('<br />'), '');
		}
	}

	ngOnInit() {
	}
}