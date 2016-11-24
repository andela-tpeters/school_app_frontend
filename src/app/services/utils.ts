import { Http, Headers } from "@angular/http";
import { LoginService } from "../modals/login/login.service";
import { TYPE, PROPERTIES, PAYMENT_INTERVAL } from "../app.constants";

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
}
