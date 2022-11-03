// En javascript todos los elementos que no son primitivos deriban de la clase objeto
// los objetos pueden tener un sin fin de propiedades, cada una con diferentes tipos, incluso una propiedad puede contener otro objeto.

//Desafio:
// Crear una funcion que compara dos objetos y determina si los objetos son iguales
// para hacer la validacion, la funcion correcra las propiedades de ambos objetos y las compara una a la otra
// las propiedades no solo se comparan a nivel primitivo sino que la funcion debera validar si las propiedades son objetos o arreglso en si
// En caso de que las propiedades tengan objetos anidados deberemos utilizar recursion para validar las propiedades de los objetos hijos.

// 1. Escribir una funcion que determine si dos objetos son iguales:
// Validacion 1
function sonIguales(obj1, obj2) {
    if(Array.isArray(obj1) && Array.isArray(obj2)) {
        for(let i = 0; i <= obj1.length; i++) {
            if(!sonIguales(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }

    // Validacion 2
    // Comparar los elementos en caso de que sean objetos y voy a validar de que los objetos si sean objetos
    if (typeof obj1 === 'objet' && typeof obj2 === 'object') { 
        const keys = Object.keys(obj1);
        for(const key of keys) {
            if(!sonIguales(obj1[key], obj2[key])) {
                return false; // En caso de que no sean iguales
            }
        }
        return true; // En caso de que todos sean iguales
    } 
    return obj1 === obj2; // En csaso de que no sean objetos ni arreglos entonces se van a comparar como valores primitivos
};

// 2. Todos los console.logs deben retornar true. 
console.log(sonIguales(2, 2));
console.log(sonIguales([1, 2, 3], [1, 2, 3]));
console.log(sonIguales({ a: 1, b: 2}, { a: 1, b:2}));
console.log(sonIguales([{ a: 1, b: 2}], [{ a:1, b: 2}]));
console.log(sonIguales([{ a: [100, 200], b: 2}], [{ a: [100, 200], b: 2}]));
console.log(sonIguales([{ a: [100, 200], b: { x: 'ABC' } }], [{ a: [100, 200], b: { x: 'ABC' } }]));
