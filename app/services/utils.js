"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.objToString = function (obj) {
        var result = [];
        var _loop_1 = function(o) {
            obj[o].map(function (i) {
                result.push(o.toUpperCase() + ": " + i + "\n");
            });
        };
        for (var o in obj) {
            _loop_1(o);
        }
        return result;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map