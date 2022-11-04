// En programacion el concepto "throttle" o robete es cuando se limita el llamado de una funcion por tiempo determinado
// Esta tecnica se utiliza generalmente cuando llamamos una funcion basada en un evento.
// ejemplo: cuando el usuario escribe el texto en el campo de input y se utiliza el throttle para no sobrecargar el sistema con llamadas recurrentes a la ejecucion de la funcion que maneja el evento de input

// En este Desafio se nos presentara un formulario con un campo de texto donde el usuario, podra agregar texto, que automaticamentese mostrara en reversa en pantalla 
// Aplicar la técnica de throttle para 
// limitar el número de llamadas a la función que invierte el texto:


const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

input.addEventListener('input', () => {
    throttle(reversa, 300);
});

function reversa() {
    resultados.innerText = '';
    const valor = input.value;
    resultados.innerText = valor.split('').reverse().join('');
}

let idTimer;
function throttle(func, tiempo){
    if(idTimer){
        return;
    }

    idTimer = setTimeout(() => {
        func();
        idTimer = undefined;
    }, tiempo);
}