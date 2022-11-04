// Pra parcticar las dimensiones y el posicionamiento de elementos de una pagina web, 
// vamos a construir un fractal llamado "la alfombra de Sierpinski" 
// es un fractal que se construye dividiendo un cuadrado en otros nueve, cuyo tamano es un tercio del original
// en terminos matematicos, los fractales se generan por recursion, 

// En este Desafio vamos a escribir una función recursiva que genere el fractal:

let repeticionesTotales = 3;
let tamanoStage = 600;

function dibujarFractal(x, y, w, repeticiones) {
    if(repeticiones === 0){
        return;
    }
    let anchoCuadrado = w / 3;
    let nuevoX = x + anchoCuadrado;
    let nuevoY = y + anchoCuadrado;

    generarCuadrado(anchoCuadrado, nuevoX, nuevoY);

    dibujarFractal(nuevoX - anchoCuadrado, nuevoY - anchoCuadrado, anchoCuadrado, repeticiones - 1);

    dibujarFractal(nuevoX, nuevoY - anchoCuadrado, anchoCuadrado, repeticiones - 1);

    dibujarFractal(nuevoX + anchoCuadrado, nuevoY - anchoCuadrado, anchoCuadrado, repeticiones - 1);

    dibujarFractal(nuevoX - anchoCuadrado, nuevoY, anchoCuadrado, repeticiones - 1);

    dibujarFractal(nuevoX + anchoCuadrado, nuevoY, anchoCuadrado, repeticiones - 1);

    dibujarFractal(nuevoX - anchoCuadrado, nuevoY + anchoCuadrado, anchoCuadrado, repeticiones - 1);

    dibujarFractal(nuevoX, nuevoY + anchoCuadrado, anchoCuadrado, repeticiones - 1);

    dibujarFractal(nuevoX + anchoCuadrado, nuevoY + anchoCuadrado, anchoCuadrado, repeticiones - 1);

}


dibujarFractal(0, 0, tamanoStage, repeticionesTotales);


function generarCuadrado(w, x, y){
    const cuadrado = document.createElement('div');
    cuadrado.style.position = 'absolute';
    cuadrado.style.width = w + 'px';
    cuadrado.style.height = w + 'px';
    cuadrado.style.left = x + 'px';
    cuadrado.style.top = y + 'px';
    cuadrado.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.appendChild(cuadrado);
}

