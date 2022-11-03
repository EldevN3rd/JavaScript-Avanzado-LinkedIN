// filtrado Datos
// En este Desafio vamos a crear un filtro de datos, se nos presentara una lista de elementos que se muestran en la pagina y un campo de texto
// El objetio es hacer que conforme al usuario vaya digitando caracteres en el campo de texto, la lista se actualice automaticamente con los elementos que coincidan con la busqueda.
//Debemos utilizar no solo eventos que detecten el input de los datos si no utilizar funciones para actualizar el DOM.

//Implementar un buscador de datos, donde los resultados se muestren tan pornto el usuario escriba texto en el input disponible

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

input.addEventListener('input', () => {
    resultados.innerHTML = '';
    const valor = input.value.toLowerCase();
    const datosFiltrados = DATOS.filter(dato => dato.nombre.toLowerCase().indexOf(valor) > -1);
    //mostrar los resultados en pantalla
    const fragmento = document.createDocumentFragment();
    for(const dato of datosFiltrados) {
        fragmento.appendChild(generarElemento(dato));
    }
    resultados.appendChild(fragmento);
})

function generarElemento(info) {
    const span = document.createElement('span');
    span.innerHTML = `<b>id:</b> ${info.id}<br>
    <b> nombre: </b> ${info.nombre} </br>
    <b> compania: </b> ${info.compania} </br>
    <b> fecha de nacimiento: </b> ${info.fdn} </br>
    <b> direccion: </b> ${info.direccion} </br>
    <b> acerca: </b> ${info.acerca} </br>`;

    return span;
}