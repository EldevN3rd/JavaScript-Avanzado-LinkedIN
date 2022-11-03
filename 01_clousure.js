// Escribir una funcion clousure que aumente un contador en 1 cada ves que la funcion se llame

function generarClousure(valor){
    return ()=> valor += 1;
}
const contador = generarClousure(1);

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());





