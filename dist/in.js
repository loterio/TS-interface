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
        var dif = 400;
        if (max <= 1200) {
            lvl = 3;
        }
        else if (max <= 2400) {
            lvl = 6;
        }
        else {
            lvl = 10;
            dif = Math.round(max / lvl);
        }
        msg = "your mouse has " + max + " of DPI and " + lvl + " regulations for this source.\n\n        * each one with aproximately " + dif + " DPI of difference *";
        console.log(msg);
    };
    return MGamer;
}(Mouse));
exports.MGamer = MGamer;
var mouseGamerColored = /** @class */ (function (_super) {
    __extends(mouseGamerColored, _super);
    function mouseGamerColored(colors) {
        var _this = _super.call(this) || this;
        _this.rgb = colors;
        return _this;
    }
    mouseGamerColored.prototype.descAll = function () {
        console.log("\n        brand: " + this.brand + "\n\n        model: " + this.model + "\n\n        DPI: " + this.maxDPI + "\n\n        buttons: " + this.buttons + "\n\n        wireless: " + this.wireless + "\n\n        RGB: " + this.rgb + "\n\n        ");
    };
    return mouseGamerColored;
}(MGamer));
exports.mouseGamerColored = mouseGamerColored;
