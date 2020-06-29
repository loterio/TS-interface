import {Mouse, MGamer, mouseGamerColored} from './in'

let rato = new MGamer;
rato.brand = "C3TECH"
rato.model = "MG-11 BSI"
rato.buttons = 6
rato.maxDPI = 2400
rato.wireless = false

let dpi = rato.maxDPI
rato.changeDPI(dpi)
rato.describePeriferic();

let me = new Mouse;

me.brand = 'Razer';
me.model = 'gamer pro';
me.wireless = false;
//me.describePeriferic();

let dream = new mouseGamerColored(true);

dream.brand = 'Razer'
dream.model = 'Viper Ultimate'
dream.maxDPI = 20000
dream.buttons = 8
dream.wireless = true

dream.descAll()
dream.changeDPI(dream.maxDPI)
//console.log(dream.rgb);