"use strict"

// *** backend files connection map ***
//src/routes/home/home.ctrl.js => src/routes/hoem/index.js => app/app.js => .bin/www.js

const UserStorage = require('../../models/UserStorage')

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login")
  },  
}

//post로 frontend에서 보낸 data를 process
const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    // const userStorage = new UserStorage(); // UserStorage에 users에 static을 사용하지 않았을 때
    // const users = userStorage.users; 

    const users = UserStorage.getUsers("id", "password"); //data를 getUsers라는 method을 거처서 은닉해서 들어온다.
  
    const response = {};
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.password[idx] === password) {
        response.success = true; //it means response = { success: true };
        response.meg = "successfully logged in"; // response = { meg: "successfully logged in" };
        return res.json(response);
      }
    }
    response.success = false;
    response.meg= "login failed"
    return res.json(response);
  },
}

module.exports = { 
  output, 
  process,

};