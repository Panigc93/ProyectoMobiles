"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, array) {
        this.name = name;
        this.location = location;
        this.mobiles = array;
        this.totalPrice = 0;
        this.precioSuma = this.totalPriceCalculation();
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
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is all my mobiles\n");
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("the characteristics of the mobile " + this.mobiles[i].getName() + " are:\n"
                + "Name: " + this.mobiles[i].getName() + "\nModel: " + this.mobiles[i].getModel() +
                "\nTrademark: " + this.mobiles[i].getMark() + "\nSD Size: " + this.mobiles[i].getSD() + "\nColor: "
                + this.mobiles[i].getColor() + "\nIs 5G?: " + this.mobiles[i].get5G() + "\nNumber of Cameras: " + this.mobiles[i].getCamera() + "\n");
        }
        console.log("\nPrice overall: " + this.precioSuma);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
