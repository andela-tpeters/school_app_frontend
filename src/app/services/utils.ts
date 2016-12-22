import { Http, Headers } from "@angular/http";
import { LoginService } from "../modals/login/login.service";
import { TYPE, PROPERTIES, PAYMENT_INTERVAL } from "../app.constants";
import { SearchModel } from "../directives/search-index/search-model";

export class Utils {
    objToString(obj: {}) {
        var result: any[] = [];
        for(let o in obj) {
            obj[o].map(function(i: any) {
               result.push(o.toUpperCase() + ": " + i + "\n");
            });
        }
        return result;
    }

    makeHeader(http: Http) {
    	let token = new LoginService(http).getToken();
    	return new Headers({'Authorization': token});
    }

    getNamefromValue(val: string) {
        let pre = TYPE.concat(PROPERTIES).concat(PAYMENT_INTERVAL);
        let data: any = null;

        for(let p of pre) {
            if(p.value === val) {
                return p.name;
            }
        }

    }

    validateSearchModel(body: SearchModel) {
        let validation: boolean = true;
        let errors: string[] = [];

        if(body.q.length <= 0 && body.schtype.length <= 0 && body.lga.length <= 0) {
            validation = false;
            errors.push("Please provide at least one criterium for search");
        }

        return {
            isCorrect: validation,
            errors: errors
        }
    }
}
