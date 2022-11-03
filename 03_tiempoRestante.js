// Objeto Fecha
// En este Desafio se nos presentara una pagina en el cual muestra una fecha en el futuro
// Debemos escribir una funcion que calula cuantos dias, horas, minutos y segundos faltan para la fecha y el resultado debera mostrarse en pantalla.
// Se puede escribir un intervalo que se ejecute cada segundo para refrescar los valores de la pagina simulando un cronometro en vivo.

const fechaFinal = new Date('2050-05-08');
const rsultado = document.getElementById('resultado');

// constantes ano, mes y demas
const ms_anno = 1000 * 60 * 60 * 24 * 365; // mayor a menor = annos
const ms_monts = 1000 * 60 * 60 * 24 * 30; // meses
const ms_day = 1000 * 60 * 60 * 24; // dias
const ms_hours = 1000 * 60 * 60; // horas
const ms_minuts = 1000 * 60; // minutos
const ms_segund = 1000; // segundos


// calcular la diferencia entre el dia de hoy y esta fecha
setInterval(() => {
    const hoy = new Date();
    let resto;
    const diffMilisegundos = Math.abs(fechaFinal - hoy);
    const annos = Math.floor(diffMilisegundos / ms_anno); // calcular cuantos anos faltan?

    resto = diffMilisegundos % ms_anno;
    const meses = Math.floor(resto / ms_monts);

    resto = diffMilisegundos % ms_monts;
    const dias = Math.floor(resto / ms_day);

    resto = diffMilisegundos % ms_day;
    const horas = Math.floor(resto / ms_hours);

    resto = diffMilisegundos % ms_hours;
    const minutos = Math.floor(resto / ms_minuts);

    resto = diffMilisegundos % ms_minuts;
    const segundos = Math.floor(resto / ms_segundo);

    resultado.innerText = `${annos}: ${meses}: ${dias}: ${horas}: ${minutos}: ${segundos}`;
}, 1000);

