// Es comun trabajar con datos en JavaScript, que los organicemos de una manera que se puedan entender y leer mas facilmente.
// Algo que se hace conmumente en la planeacion de arreglos, la planeacion de arreglos se hace conmunmente donde nosotros tebemos arreglos y estos contengan arreglos dentro de si.
// Lo que hace el metodo de aplaniacion es que toma todos los valores de los hijos y los pone al mismo nivelen que se encuentra el padre.

// En este Desafio vamos a crear una funcion que recibe como parametro un arreglo y la funcion debera retornar el arreglo aplanado
// Implementar solución para aplanar el arreglo:

const arreglo = [
    [1, 2],
    [3, [7, 8, [90, 2, 13]]],
    [5, [7, 8, 9]],
    [10, 11, 12, [7, 8, [90, 2, 13]], 14, 15]
];

const simple = arreglo. flat(3);
console.log(simple);

// funcion recursiva
const arregloPlano = [];

function aplanar(arr){
    for(const el of arr){
        if(Array.isArray(el)){
            aplanar(el);
        } else {
            arregloPlano.push(el);
        }
    }
}
aplanar(arreglo);
console.log(arregloPlanoo);