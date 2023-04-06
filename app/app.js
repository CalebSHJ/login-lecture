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

// *** backend files connection map ***
//src/routes/home/home.ctrl.js => src/routes/hoem/index.js => app/app.js => .bin/www.js


//modules
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

//routing
const home = require("./src/routes/home") // get, post, put, delete 방식으로 data를 처리하는 folder

//app setting
app.set("views", "./src/views"); // html을 브라우저에 출력
app.set("view engine", "ejs"); //ejs file을 사용함. html을 사용해도 같음

//use를 사용하는 것은 middleware이다
app.use(express.static(`${__dirname}/src/public`)); //views 폴더안에 있는 html이 public 폴더안의 js 파일 혹은 css 파일과 연결되기 위해 반드시 필요.

app.use(bodyParser.json()); //Frontend에서 post로 보낸 data를 parsing하기위해 반드시 필요함.

app.use(bodyParser.urlencoded({ extended: true }))//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 못하는 문제 해결

app.use("/", home); //middleware를 등록하는 method

module.exports = app; // ./bin/www.js에서 port를 통해서 서버를 start하는 하기 위해 

// *** backend files connection map ***
//src/routes/home/home.ctrl.js => src/routes/hoem/index.js => app/app.js => .bin/www.js