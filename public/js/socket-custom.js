var socket = io(); //este es el objeto de comunicación del Front End

        socket.on('connect', function(){
            console.log('Conectado al servidor !!!');
        });

        // Escuchar información
        socket.on('disconnect', function(){
            console.log('Se perdió la conexión con el servidor');
        });

        // Enviar información
        socket.emit('enviarMensaje', {
            usuario: 'Fernando',
            mensaje: 'Hola Mundo',
        }, function(res) {
            console.log(res);
        });

        socket.on('enviarMensaje', function(message){
            console.log(message);
        });