// Una obra de arte
// En este Desafio vamos a crear una clase que se encargara de almacenar los atributos de una imagen
// esta clase debera tener un metodo para cargar el archivo desde una fuente externa

// crear una clase que cargue una imaguen y que se muestre en la pagina
const rutaImagen = '../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/dmitry-ganin-Oesj7HJD0c4-unsplash.jpg';

class Imagen{
    _ruta; // propiedad ruta que es la ruta de la imagen

    constructor(ruta){
        this._ruta = ruta;
    }

    cargarImagen(){
        const img = document.createElement('img');
        img.src = this._ruta;
        document.body.appendChild(img);
    } 
}

const imagen = new Imagen(rutaImagen);
imagen.cargarImagen();