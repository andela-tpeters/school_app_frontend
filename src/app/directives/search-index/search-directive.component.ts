import { Component, OnInit } from "@angular/core";
import { SearchModel } from "./search-model";

@Component({
	selector: 'search-directive',
	templateUrl: './search-directive.html'
})

export class SearchDirective implements OnInit {
	public searchModel: SearchModel;
	submit() {}

	ngOnInit() {
		this.searchModel = new SearchModel('creche','lagos');
		console.log(this.searchModel);
	}
}