// En este Desafio vamos a crear una mini libreria donde utilidad utilizando el patron universal module, utilizando la funcion autoejecutable
// https://github.com/umdjs.umd

// jQuery utiliza el simbolo de $ para llamar a los metodos


(function(nombreGlobal, root, factoria){
    root[nombreGlobal] = factoria();

}('$$', this, function(){
    return{
        saludar: () => 'Hola como estas?',
        sumar: (a, b) => a + b,
    }
}));

console.log($$.saludar());
console.log($$.sumar(1, 2));
