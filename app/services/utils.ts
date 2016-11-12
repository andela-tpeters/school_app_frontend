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
}
