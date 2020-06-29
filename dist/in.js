"use strict";
// Crie uma classe, herança e interface e situações para
// demonstrar o uso das classes em Typescript.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.describePeriferic = function () {
        console.log("\n        brand: " + this.brand + "\n\n        model: " + this.model + "\n\n        wireless: " + this.wireless + ".\n        ");
    };
    return Mouse;
}());
exports.Mouse = Mouse;
var MGamer = /** @class */ (function (_super) {
    __extends(MGamer, _super);
    function MGamer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MGamer.prototype.changeDPI = function (max) {
        var lvl;
        var msg;
        if (max <= 1200) {
            lvl = 3;
        }
        else if (max <= 2400) {
            lvl = 6;
        }
        else {
            lvl = 9;
        }
        msg = "your mouse has " + max + " of DPI and " + lvl + " regulations for this source.\n\n        * each one with 400dpi of difference *";
        console.log(msg);
    };
    return MGamer;
}(Mouse));
exports.MGamer = MGamer;
var rato = new MGamer;
rato.brand = "C3TECH";
rato.model = "MG-11 BSI";
rato.buttons = 6;
rato.maxDPI = 2400;
rato.wireless = false;
var dpi = rato.maxDPI;
rato.changeDPI(dpi);
rato.describePeriferic();
var mouseGamer = /** @class */ (function (_super) {
    __extends(mouseGamer, _super);
    function mouseGamer(colors) {
        var _this = _super.call(this) || this;
        _this.rgb = colors;
        return _this;
    }
    return mouseGamer;
}(Mouse));
