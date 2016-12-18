import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SearchModel } from "./search-model";
import { TYPE, STATES } from  "../../app.constants";

@Component({
	selector: 'search-directive',
	templateUrl: './search-directive.html'
})

export class SearchDirective implements OnInit {
	public searchModel: SearchModel = new SearchModel('','');
	public schoolType = TYPE;
	public states = STATES;

	constructor(private router: Router) {}

	submit() {
		this.router.navigate(['search', this.searchModel.q, this.searchModel.state]);
	}

	ngOnInit() {
	}
}