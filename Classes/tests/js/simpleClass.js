// Fecha: 16 de diciembre del 2022

function obj1 () {

    function range(from, to) {
        let r = Object.create(range.methods);
        console.log('dentro de range r:', r);
        
        let props = [];
        for (let prop in r)  { 
            props.push(prop);
        }
        console.log('props de r en range: ', props);
        
        r.from = from;
        r.to = to;
        
        return r;
    }
    
    
    // Se crea un objeto que sirva de prototipo
    range.methods = {
        includes(x) { return this.from <= x && x <= this.to; },
        
        *[Symbol.iterator]() {
            for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
        },
        
        toString() { return "(" + this.from + "..." + this.to + ")"; }
    };
    
    let r = range(1, 3);
    console.log('objeto r: ', r.includes(2));
    console.log('r to string: ',r.toString());
    console.log([...r]);
}

function obj2 () {

    function punto(x, y) {
        let p = Object.create(punto.methods);
        p.x = x;
        p.y = y;

        return p;
    }

    punto.methods = {
        suma: function(other) { 
            let sumx = this.x + other.x;
            let sumy = this.y + other.y;
            return { x: sumx, y: sumy };
        },

        resta: function(other) {
            let resx = this.x - other.x;
            let resy = this.y - other.y;
            return { x: resx, y: resy };
        }
    }

    let punto1 = punto(1, 1);
    let punto2 = punto(2, 1);
    let restaPuntos12 = punto1.resta(punto2);
    let restaPuntos21 = punto2.resta(punto1);
    console.log('Resta puntos 1 - 2:', restaPuntos12);
    console.log('Resta puntos 2 - 1:', restaPuntos21);
}

// obj2();

function ob3() {

    const proto = {
        saludo: function() { return `hola ${this.nombre}`; }
    }

    function crearProto(nombre) {
        let ob = Object.create(proto);
        ob.nombre =nombre;

        return ob;
    }

    let proto1 = crearProto('Loreto');
    console.log('proto1:', proto1);

    // False?
    console.log(proto1 instanceof crearProto);
    console.log(proto.isPrototypeOf(proto1));
}

ob3();