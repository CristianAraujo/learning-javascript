// fecha: 01 de diciembre del 2022

class Person {
    constructor (nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    [Symbol.iterator]() {
        let datos = [this.nombre, this.edad, this.pais]
        let iterador = datos[Symbol.iterator]();

        return {
            next() {
                return {
                    done: iterador.next().done ? true : false,
                    value: iterador.next().value
                };
            },

            [Symbol.iterator]() { return this; }
        };
    }
}

let persona = new Person('Camila', 22, 'Chile');
// console.log(persona);
for (let prop of persona) {
    console.log(prop);
}