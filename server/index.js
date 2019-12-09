// cargar el modulo de express
var express = require('express');
var app = express();
var server = require('http').Server(app);

// emitir un sms a un cliente de un socket
app.get('/index',(req,res)=>{
    res.status(200).send('Hola mundo desde una ruta');
})

var messages = [{
    'id' : 1,
    'message' : 'Bienvenido al Chat',
    'nickname' : 'lperezp(Bot)'
}]

// cargar el modulo de socketIO
var io = require('socket.io')(server);

// cargar una vista estatica => En este caso el lado cliente
app.use(express.static('client'))

// lanzamiento de eventos de socketIO
io.on('connection',(socket)=>{
    console.log('El cliente con IP: ' + socket.handshake.address + ' se ha conectado...');

    socket.emit('messages' , messages);

    socket.on("add_message",(data)=>{
        messages.push(data);

        io.sockets.emit("messages",messages)

    });
})

// crear un servidor con Express
server.listen(2019,()=>{
    console.log('Servidor esta funcionando en http://localhost:2019');
});