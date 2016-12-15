import { Component } from "@angular/core";
import { SearchModel } from "./search-model";

@Component({
	selector: 'search-directive',
	templateUrl: 'search-directive.html'
})

export class SearchDirective {
	public searchModel: SearchModel;
	submit() {}
}