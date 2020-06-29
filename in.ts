// Crie uma classe, herança e interface e situações para
// demonstrar o uso das classes em Typescript.

class Mouse{
    brand:string;
    model:string;
    wireless:boolean;
    describePeriferic(){
        console.log(`
        brand: ${this.brand}\n
        model: ${this.model}\n
        wireless: ${this.wireless}.
        `)
    }
}

class MGamer extends Mouse{
    maxDPI:number;
    buttons:number;
    rgb: number; 

    changeDPI(max:number){  
        let lvl:number;
        let msg:string;

        if(max <= 1200) { 
            lvl = 3;
        } else if(max <= 2400) {
            lvl = 6;
        } else {
            lvl = 9;
        }
        msg = `your mouse has ${max} of DPI and ${lvl} regulations for this source.\n
        * each one with 400dpi of difference *`;
        console.log(msg);
    }
}

let rato = new MGamer;
rato.brand = "C3TECH"
rato.model = "MG-11 BSI"
rato.buttons = 6
rato.maxDPI = 2400
rato.wireless = false

let dpi = rato.maxDPI

rato.changeDPI(dpi)
rato.describePeriferic();

// -----------------------------------------------------------------------------

interface differentials{
    rgb:boolean;
}
class mouseGamer extends Mouse implements differentials{
    rgb : boolean
    constructor(colors){
        super()
        this.rgb = colors
    }
}

export{ Mouse, MGamer}