// Al cargar varios elementos al mismo tiempo de manera asincrona 
// para poder ejecutar operaciones asincronas al mismo tiempo dbemos utilizar el metodo [promise all] para asi poder manejar el resultado de todas estas operaciones y ejecutar el codigo en orden. 
// En este Desafio vamos a crear una Galeria que mostrara varias fotografias
// las rutas a estas fotografias estan dentro de un JSON  
// El objetivo de este desafio es recorrer el JSON cargar la fotografia asincronamente y mostrarlas al usuario

const imagenes = [
    {
        id: 0,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 1,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 2,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 3,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 4,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 5,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 6,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 7,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
    {
        id: 8,
        src: '../../Users/soyhipst/Desktop/js/js-avanzado-linkedin/imagenes/index.js/alex-azabache-Z4tV7BT-wis-unsplash.jpg'
    },
]