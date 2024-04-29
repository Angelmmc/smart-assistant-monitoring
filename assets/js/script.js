document.addEventListener('DOMContentLoaded', function () {
    // Definicion de elementos a modificar en el programa
    var orden = document.getElementById("orden");
    var edit = document.getElementById("editable");

    var imgGar1 = document.getElementById('light-garden-1');
    var imgGar2 = document.getElementById('light-garden-2');
    var imgGar3 = document.getElementById('light-garden-3');
    var imgGar4 = document.getElementById('light-garden-4');
    var imgGar5 = document.getElementById('light-garden-5');

    var imgCam1 = document.getElementById('camera-1');
    var imgCam2 = document.getElementById('camera-2');
    var imgCam3 = document.getElementById('camera-3');

    var imgCur1 = document.getElementById('curtain-1');
    var imgCur2 = document.getElementById('curtain-2');
    var imgCur3 = document.getElementById('curtain-3');

    var imgLivingRoom = document.getElementById('light-living-room');
    var imgRoom = document.getElementById('light-room');

    var imgFan = document.getElementById('fan');
    var imgAlarm = document.getElementById('alarm');

    // Funcon que se repite cada 4 segundos para actualizar la informacion de la orden
    // Se hace uso de la funcion getJson para obtener la informacion de MockApi

    //function main() {
    getJson("https://662f095743b6a7dce30e4068.mockapi.io/status/1")
        .then(data => {
            //Si la promesa se cumple se imprime el valor obtenido en consola y en la pagina
            console.log(data);
            //Ejecucion de metodo que ejecuta la funcion basado en el texto proporcionado

            const segundoElemento = data.alarm;
            console.log(segundoElemento);

            checkStatus(data);

        })
        .catch(error => {
            console.error('Error al obtener o procesar los datos:', error);
        });

    //}

    //Ejecucion del codigo main cada 4 segundos
    //setInterval(main, 4000);

    // Funcion para obtiene el valor del json
    function getJson(url) {
        // La función trabaja con promesas para asegurar que los datos se obtengan antes de ser usados
        return new Promise((resolve, reject) => {
            // Se envía la solicitud HTTP a MockAPI usando el método GET por defecto
            fetch(url)
                // Operación asíncrona en la que se espera a la respuesta de MockApi
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener los datos');
                    }
                    return response.json();
                })
                // Operación asíncrona en la que se devuelve el arreglo completo a la resolución de la promesa
                .then(data => {
                    resolve(data);
                })
                // Operación asíncrona en la que si ocurre algún error se maneja
                .catch(error => {
                    console.error('Error:', error);
                    reject(error);
                });
        });
    }

    function checkStatus(json) {
        console.log("aqui te va chaval");
        console.log(json.alarm);

    }


    //Funcion que imita el comportamiento de las condiciones en el codigo principal

});
