var socket = io();

//escuchar
socket.on('connect', function () {
    console.log('conectado al servidor');
});
//escuchar
socket.on('disconnect', function () {
    console.log('perdimos conexion con el servidor');

});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Oscar',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log(resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje);
});