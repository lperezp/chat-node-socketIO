// cargar el modulo de express
var express = require('express');
var app = express();
var server = require('http').Server(app);

// cargar el modulo de socketIO
var io = require('socket.io')(server);

// crear un servidor con Express
server.listen(2019,()=>{
    console.log('Servidor esta funcionando en http://localhost:2019');
});