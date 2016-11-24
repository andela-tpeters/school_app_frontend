import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { NewSchoolModel } from "../new_school/new-school.model";
import { SingleSchoolService } from "./single-school.service";
import { Observable } from "rxjs/Observable";


@Injectable()

export class SchoolResolver implements Resolve<NewSchoolModel> {
	constructor(private sss: SingleSchoolService, private router: Router){}

	resolve(route: ActivatedRouteSnapshot): Observable<any> {
		let id = route.params["id"];

		return this.sss.getSchool(id).map(res => res).catch(err => this.router.navigate(["/404"]));

	}
}

