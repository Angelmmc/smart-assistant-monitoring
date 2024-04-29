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

    var boton = document.getElementById("miBoton");

    // Agrega un evento de clic al botón
    boton.addEventListener("click", function() {
        // Aquí llama a la función que deseas ejecutar
        main();
    });

    // Funcon que se repite cada 4 segundos para actualizar la informacion de la orden
    // Se hace uso de la funcion getJson para obtener la informacion de MockApi

    function main() {
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

    }

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

        var room = json.room
        var livingRoom = json.livingRoom
        var garden = json.garden
        var fan = json.fan
        var curtain = json.room
        var alarm = json.alarm
        var camera = json.camera

        const audioOn = new Audio("assets/sound/alarm-on.mp3");
        const audioOff = new Audio("assets/sound/alarm-off.mp3");

        if (room === 1) {
            // Realizar acción cuando la habitación está encendida
            imgRoom.src = "assets/img/light-on.svg";
        } else {
            // Realizar acción cuando la habitación está apagada
            imgRoom.src = "assets/img/light-off.svg";
        }

        if (livingRoom === 1) {
            // Realizar acción cuando la habitación está encendida
            imgLivingRoom.src = "assets/img/light-on.svg";
        } else {
            // Realizar acción cuando la habitación está apagada
            imgLivingRoom.src = "assets/img/light-off.svg";
        }

        if (fan === 1) {
            // Realizar acción cuando la habitación está encendida
            imgFan.src = "assets/img/fan-on.svg";
        } else {
            // Realizar acción cuando la habitación está apagada
            imgFan.src = "assets/img/fan-off.svg";
        }

        if (alarm === 1) {
            // Realizar acción cuando la habitación está encendida
            audioOn.play();
            imgAlarm.src = "assets/img/alarm-on.svg";
        } else {
            // Realizar acción cuando la habitación está apagada
            audioOff.play();
            imgAlarm.src = "assets/img/alarm-off.svg";
        }

        if (curtain === 1) {
            // Realizar acción cuando la habitación está encendida
            imgCur1.src = "assets/img/curtain-open.svg";
            imgCur2.src = "assets/img/curtain-open.svg";
            imgCur3.src = "assets/img/curtain-open.svg";
        } else {
            // Realizar acción cuando la habitación está apagada
            imgCur1.src = "assets/img/curtain-close.svg";
            imgCur2.src = "assets/img/curtain-close.svg";
            imgCur3.src = "assets/img/curtain-close.svg";
        }
        
        if (camera === 1) {
            // Realizar acción cuando la habitación está encendida
            imgCam1.src = "assets/img/camera-on.svg";
            imgCam2.src = "assets/img/camera-on.svg";
            imgCam3.src = "assets/img/camera-on.svg";
        } else {
            // Realizar acción cuando la habitación está apagada
            imgCam1.src = "assets/img/camera-off.svg";
            imgCam2.src = "assets/img/camera-off.svg";
            imgCam3.src = "assets/img/camera-off.svg";
        }

        if (garden === 1) {
            // Realizar acción cuando la habitación está encendida
            imgGar1.src = "assets/img/light-on.svg";
            imgGar2.src = "assets/img/light-on.svg";
            imgGar3.src = "assets/img/light-on.svg";
            imgGar4.src = "assets/img/light-on.svg";
            imgGar5.src = "assets/img/light-on.svg";
        } else {
            // Realizar acción cuando la habitación está apagada
            imgGar1.src = "assets/img/light-off.svg";
            imgGar2.src = "assets/img/light-off.svg";
            imgGar3.src = "assets/img/light-off.svg";
            imgGar4.src = "assets/img/light-off.svg";
            imgGar5.src = "assets/img/light-off.svg";
        }
    }

  
    //Funcion que imita el comportamiento de las condiciones en el codigo principal

});
