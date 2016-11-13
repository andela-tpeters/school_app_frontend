"use strict";
var NewUser = (function () {
    function NewUser(firstname, lastname, email, user_type, password, passwordConfirmation) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.user_type = user_type;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
    }
    return NewUser;
}());
exports.NewUser = NewUser;
//# sourceMappingURL=new_user.js.map