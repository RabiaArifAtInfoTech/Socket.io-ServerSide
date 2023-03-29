import express from "express";
const app = express();
import http from "http";

// const http = require('http');
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile("E:/ServerSide/index.html");
});

io.on('connection', (socket) => {
 // socket.broadcast.emit('hi');
  
 socket.on('chat message', (msg) => {
    console.log('message from client: ' + msg);

  });

  const msg1 = "test message from server";

    socket.emit('chat message', msg1);
  
  

  // const msg1 = "from server";

  // socket.emit('chat message' , (msg1) => {
  //   io.emit('chat message', msg1);
  // });

  // });
	// socket.on('chat message', (msg) => {
  //   console.log('message: ' + msg);
  // });

  console.log("A user is connected");
  
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});




 // const msg1 = "from server"
  // socket.emit('chat message' , (msg1) => {
  //   io.emit('chat message', msg1);

  // });



// import { createServer } from "http";
// import { Server } from "socket.io";

// //const { Server } = require("socket.io");

// const httpServer = createServer();

// const io = new Server(httpServer);

// io.on("connection", (socket) => {
  
//   // send a message to the client
//   socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });
//  // socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

//  // console.log(socket.id);

//   // // receive a message from the client
//   socket.on("hello from client", (...args) => {
// 	console.log("Server is Running");

//     // ...
//   });

// });

// // Server listening to port 3000
// httpServer.listen((3000), () => {
// 	console.log("Server is Running");
// })










// // var fs          = require('fs');
// // var app         = require('express')();
// // var server;
// // if (process.env.ENABLE_SSL) {
// //     // SSL通信路を作成
// //     server      = require('https').Server({
// // 	key:  fs.readFileSync('server.key'),
// // 	cert: fs.readFileSync('server.crt'),
// // 	ca:   fs.readFileSync('ca.crt'),
// // 	requestCert: true,
// // 	rejectUnauthrized: false
// //     }, app);
// //     console.log('enable ssl');

// // } else {
// //     // 非SSL通信路を作成
// //     server      = require('http').Server(app);
// // }
// // var io          = require('socket.io')(server);

// // server.listen(3000);

// // // ブラウザから/にアクセスがあったらindex.htmlを戻す
// // app.get('/', function(req, res) {
// //     res.sendFile(__dirname + '/index.html');
// // });

// // io.on('connection', function(socket) {

// //     socket.on('join', function(data) {
// // 	// typeには'browser'か'native'が来るので、それぞれのroomに登録する
// // 	socket.join(data.type);
// // 	// nameをセッションに保存する
// // 	socket.session = {
// // 	    name: data.name
// // 	}
// // 	console.log('join:', data.name);
// //     });

// //     socket.on('run', function(data) {
// // 	// 送り元の名前をdataに追加してブロードキャスト
// // 	data.from = socket.session.name;
// // 	socket.broadcast.emit('run', data);
// // 	console.log('run(' + data.from + '):' + data.command);
// //     });

// //     socket.on('reply', function(data) {
// // 	// browserルームに対してdataをブロードキャスト
// // 	data.from = socket.session.name;
// // 	io.to('browser').emit('reply', data);
// // 	console.log('reply(' + data.from + '):' + data.output);
// //     });
// // });