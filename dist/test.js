"use strict";
exports.__esModule = true;
var in_1 = require("./in");
var rato = new in_1.MGamer;
rato.brand = "C3TECH";
rato.model = "MG-11 BSI";
rato.buttons = 6;
rato.maxDPI = 2400;
rato.wireless = false;
var dpi = rato.maxDPI;
rato.changeDPI(dpi);
rato.describePeriferic();
var me = new in_1.Mouse;
me.brand = 'Razer';
me.model = 'gamer pro';
me.wireless = false;
//me.describePeriferic();
var dream = new in_1.mouseGamerColored(true);
dream.brand = 'Razer';
dream.model = 'Viper Ultimate';
dream.maxDPI = 20000;
dream.buttons = 8;
dream.wireless = true;
dream.descAll();
dream.changeDPI(dream.maxDPI);
//console.log(dream.rgb);
