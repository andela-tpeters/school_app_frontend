"use strict";
exports.BaseUrl = "http://school-maps.herokuapp.com/api/v1/";
// export const BaseUrl = "http://localhost:3001/api/v1/";
exports.LoginUrl = exports.BaseUrl + "login";
exports.RegistrationUrl = exports.BaseUrl + "users";
exports.NewSchoolUrl = exports.BaseUrl + "schools";
exports.CURRENCY = [
    { name: "USD", value: "USD" },
    { name: "EURO", value: "EUR" }
];
exports.OWNED_BY = [
    { name: "Private", value: 'private' },
    { name: "Government", value: 'government' }
];
exports.TYPE = [
    { name: "Creche", value: 'creche' },
    { name: 'College', value: 'college' },
    { name: 'University', value: 'university' },
    { name: 'Polytechnic', value: 'polytechnic' },
    { name: "Nursery/Primary", value: 'nur/pry' },
    { name: "Secondary/High", value: 'sec/high' },
    { name: 'Music School', value: 'music_school' },
    { name: 'Sport school', value: 'sport_school' },
    { name: 'Business School', value: 'business_school' }
];
exports.CONDITION = [
    { name: 'Top', value: 'top' },
    { name: 'Other', value: 'other' },
    { name: 'Featured', value: 'featured' }
];
exports.PAYMENT_INTERVAL = [
    { name: 'Yearly', value: 'yearly' },
    { name: 'Monthly', value: "monthly" },
    { name: 'Per Term', value: 'per_term' },
    { name: 'Installment', value: 'installment' }
];
exports.STATES = [
    { name: "Abia", capital: "Umuahia", value: "abia" },
    { name: "Adamawa", capital: "Yola", value: "adamawa" },
    { name: "Akwa Ibom", capital: "Uyo", value: "akwa-ibom" },
    { name: "Anambra", capital: "Awka", value: "anambra" },
    { name: "Bauchi", capital: "Bauchi", value: "bauchi" },
    { name: "Bayelsa", capital: "Yenegoa", value: "bayelsa" },
    { name: "Benue", capital: "Markurdi", value: "benue" },
    { name: "Borno", capital: "Maiduguri", value: "borno" },
    { name: "Cross River", capital: "Calabar", value: "cross-river" },
    { name: "Delta", capital: "Asaba", value: "delta" },
    { name: "Ebonyi", capital: "Abakaliki", value: "ebonyi" },
    { name: "Edo", capital: "Benin", value: "edo" },
    { name: "Ekiti", capital: "Ado-Ekiti", value: "ekiti" },
    { name: "Enugu", capital: "Enugu", value: "enugu" },
    { name: "FCT", capital: "Abuja", value: "abuja" },
    { name: "Gombe", capital: "Gombe", value: "gombe" },
    { name: "Imo", capital: "Owerri", value: "imo" },
    { name: "Jigawa", capital: "Dutse", value: "jigawa" },
    { name: "Kaduna", capital: "Kaduna", value: "kaduna" },
    { name: "Kano", capital: "Kano", value: "kano" },
    { name: "Katsina", capital: "Katsina", value: "katsina" },
    { name: "Kebbi", capital: "Benin-Kebbi", value: "kebbi" },
    { name: "Kogi", capital: "Lokoja", value: "kogi" },
    { name: "Kwara", capital: "Ilorin", value: "kwara" },
    { name: "Lagos", capital: "Ikeja", value: "lagos" },
    { name: "Nasarawa", capital: "Lafia", value: "nasarawa" },
    { name: "Niger", capital: "Minna", value: "niger" },
    { name: "Ogun", capital: "Abeokuta", value: "ogun" },
    { name: "Ondo", capital: "Akure", value: "ondo" },
    { name: "Osun", capital: "Osogbo", value: "osun" },
    { name: "Oyo", capital: "Ibadan", value: "oyo" },
    { name: "Plateau", capital: "Jos", value: "plateau" },
    { name: "Rivers", capital: "Port-Harcourt", value: "rivers" },
    { name: "Sokoto", capital: "Sokoto", value: "sokoto" },
    { name: "Taraba", capital: "Jalingo", value: "taraba" },
    { name: "Yobe", capital: "Damaturu", value: "yobe" },
    { name: "Zamfara", capital: "Gusau", value: "zamfara" }
];
exports.PROPERTIES = [
    { name: "Air Conditioning", value: 'air_condition' },
    { name: 'Baseball', value: 'base_ball' },
    { name: 'Basketball', value: 'basketball' },
    { name: 'Cafeteria', value: 'cafeteria' },
    { name: 'Creche', value: 'creche' },
    { name: 'Football', value: 'football' },
    { name: 'Hostel', value: 'hostel' },
    { name: 'ICT Lab', value: 'ict_lab' },
    { name: 'Internet/Wifi', value: 'internet' },
    { name: 'Lawn Tennis', value: 'lawn_tennis' },
    { name: 'Library', value: 'library' },
    { name: 'Media Classrooms', value: 'media_classrooms' },
    { name: 'Music Room', value: 'music_room' },
    { name: 'Swimming', value: 'swimming' },
    { name: 'White Electronic Board', value: 'white_electronic_board' }
];
//# sourceMappingURL=app.constants.js.map