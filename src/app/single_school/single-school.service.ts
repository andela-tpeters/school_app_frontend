import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { LoginService } from "../modals/login/login.service";
import { GetSchoolUrl } from "../app.constants";
import { Utils } from "../services/utils";

@Injectable()


export class SingleSchoolService {
	private utils: Utils = new Utils();

	constructor(private http: Http, private loginService: LoginService) {}
	
	header: Headers = this.utils.makeHeader(this.http);

	options = { headers: this.header };

	handleError(err: Response) {
		return Observable.throw(err.json() || "Error from getting the school");
	}

	getSchool(id: number): Observable<any> {
		return this.http.get(GetSchoolUrl + id, this.options)
						.map((res) => res.json())
						.catch((err) => this.handleError(err));
	}
}