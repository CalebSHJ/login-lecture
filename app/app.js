//make a server without express module 
// const http = require('http'); //http는 내장 모듈. no need to download as the other modules.
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "content-Type": "text/html; charset=utf-8" }) //브라우저가 한글을 읽을 수 있도록
//   if (req.url === '/') {
//     res.end("this is 루트");
//   } else if(req.url === '/login') {
//     res.end("this is login 화면");
//   }
// });

// app.listen(4001, () => {
//   console.log("server through http")
// })
"use strict"
//modules
const express = require('express');
const app = express();

//routing
const home = require("./src/routes/home")

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //middleware를 등록하는 method

module.exports = app;