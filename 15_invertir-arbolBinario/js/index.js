// En este Desafio vamos a practicar el uso de arboles binarios.
// Un arbol binario es una estructura compuesta de nodos y en la cual cada nodo tiene dos nodos hijos,
// Podemos llamar estos nodos como nodo derecho y nodo izquierdo.
// El objetivo de este desafio es crear un arbol binario
// para crear el arbol puedes crear cualquier estructura que tu quieras, ya sean en objetos comunes o clases.
// Luego deberas utilizar una funcion que utilizando recursion va a pasar los elementos del nodo derecho al nodo izquierdo y viceversa


class Nodo {
    constructor(valor, izquierda, derecha) {
        this.valor =  valor;
        this.izquierda = izquierda;
        this.derecha = derecha;
    }
}

function invertir(nodo) {
    // Escribir el codigo para invertir el arbol binario.

    if(!nodo || !nodo.izquierda && !nodo.derecha) {
        return nodo;
    }

    return new Nodo(nodo.valor, invertir(nodo.derecha), invertir(nodo.izquierda));
};

const arbol = new Nodo(89, new Nodo(78, new Nodo(5), new Nodo(90)), new Nodo(4, new Nodo(9), new Nodo(0)));

console.log(arbol);
console.log(invertir(arbol));