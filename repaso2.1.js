"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile() {
        this.name;
        this.model;
        this.trademark;
        this.sdSize;
        this.color;
        this.is5G;
        this.cameraNumber;
        this.price;
    }
    //Metodos
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getMark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSD = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.get5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCamera = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setName = function (nuevoName) {
        this.name = nuevoName;
    };
    Mobile.prototype.setModel = function (nuevoModelo) {
        this.model = nuevoModelo;
    };
    Mobile.prototype.setMark = function (nuevoMark) {
        this.trademark = nuevoMark;
    };
    Mobile.prototype.setSD = function (nuevoSD) {
        this.sdSize = nuevoSD;
    };
    Mobile.prototype.setColor = function (nuevoColor) {
        this.color = nuevoColor;
    };
    Mobile.prototype.set5G = function (nuevo5G) {
        this.is5G = nuevo5G;
    };
    Mobile.prototype.setCamera = function (nuevoCamera) {
        this.cameraNumber = nuevoCamera;
    };
    Mobile.prototype.setPrice = function (nuevoPrice) {
        this.price = nuevoPrice;
    };
    Mobile.prototype.imprimir = function () {
        return "The characteristics of the mobile " + this.getName() + " are: " + "Name: " + this.getName() + " Model: " + this.getModel() +
            " Trademark: " + this.getMark() + " SD Size (GB): " + this.getSD() + " Color: " + this.getColor() + " Is 5G?: " + this.get5G() +
            " Number of Cameras: " + this.getCamera();
    };
    return Mobile;
}());
exports.Mobile = Mobile;
