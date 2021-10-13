"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, array) {
        this.name = name;
        this.location = location;
        this.mobiles = array;
        this.totalPrice = 0;
    }
    //Metodos
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setName = function (nuevoName) {
        this.name = nuevoName;
    };
    MobileLibrary.prototype.setLocation = function (nuevoLocation) {
        this.location = nuevoLocation;
    };
    MobileLibrary.prototype.setNMobiles = function (nuevoMobiles) {
        this.mobiles = nuevoMobiles;
    };
    MobileLibrary.prototype.setPrice = function (nuevoPrice) {
        this.totalPrice = nuevoPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var precioTotal = this.getPrice();
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("entra en el bucle " + i);
            console.log(this.mobiles[i].getPrice());
            precioTotal += ((this.mobiles[i].getPrice()));
        }
        return precioTotal;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
