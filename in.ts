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

    changeDPI(max:number){  
        let lvl:number;
        let msg:string;
        let dif:number = 400;

        if(max <= 1200) { 
            lvl = 3;
        } else if(max <= 2400) {
            lvl = 6;
        } else {
            lvl = 10;
            dif = Math.round(max/lvl)
        }

        
        msg = `your mouse has ${max} of DPI and ${lvl} regulations for this source.\n
        * each one with aproximately ${dif} DPI of difference *`;
        console.log(msg);
    }
}

// -----------------------------------------------------------------------------

interface differentials{
    rgb:boolean;
}
class mouseGamerColored extends MGamer implements differentials{
    rgb : boolean
    constructor(colors){
        super()
        this.rgb = colors
    }
    descAll(){
        console.log(`
        brand: ${this.brand}\n
        model: ${this.model}\n
        DPI: ${this.maxDPI}\n
        buttons: ${this.buttons}\n
        wireless: ${this.wireless}\n
        RGB: ${this.rgb}\n
        `)
    }
}

export{ Mouse, MGamer, mouseGamerColored}