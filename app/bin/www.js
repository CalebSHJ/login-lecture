"use strict"

// *** backend files connection map ***
//src/routes/home/home.ctrl.js => src/routes/hoem/index.js => app/app.js => .bin/www.js

const app = require("../app"); 
const PORT = 3000; //nodemon ./bin/www.js를 사용하면 사용 중인 서버라는 메세지가 나오지 않도록 서버를 자동으로 끄고 다시 시작함.

app.listen(PORT, () => {
  console.log("server starts");
});

