// cargar el modulo de express
var express = require('express');
var app = express();
var server = require('http').Server(app);

// emitir un sms a un cliente de un socket
app.get('/index',(req,res)=>{
    res.status(200).send('Hola mundo desde una ruta');
})

// cargar el modulo de socketIO
var io = require('socket.io')(server);

// crear un servidor con Express
server.listen(2019,()=>{
    console.log('Servidor esta funcionando en http://localhost:2019');
});

// lanzamiento de eventos de socketIO
io.on('connection',(socket)=>{
    console.log("Hay un cliente nuevo", socket)
})

// cargar una vista estatica 

app.use(express.static('client'))