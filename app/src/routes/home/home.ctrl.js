"use strict"

// *** backend files connection map ***
//src/routes/home/home.ctrl.js(User.js와 UserStorage.js에서 data processing를 함) 
// => src/routes/home/index.js 
// => app/app.js 
// => .bin/www.js

// const UserStorage = require('../../models/UserStorage')
const User = require('../../models/User');

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login")
  },  
  register: (req, res) => {
    res.render("home/register")
  },
}

//post로 frontend에서 보낸 data를 process
const process = {
  login: async (req, res) => {
    //data를 ./models/User.js로 보냄.
    const user = new User(req.body) 
    const response = await user.login(); //User.js에서 오는 login 함수가 await async를 사용하기 때문에 이곳에서도 await을 사용하고, 해당 함수 앞에 async를 사용한다.
    return res.json(response);

    
    // const id = req.body.id;
    // const password = req.body.password;

    // // const userStorage = new UserStorage(); // UserStorage에 users에 static을 사용하지 않았을 때
    // // const users = userStorage.users; 

    // const users = UserStorage.getUsers("id", "password"); //data를 getUsers라는 method을 거처서 은닉해서 들어온다.
  
    // const response = {};
    // if(users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if(users.password[idx] === password) {
    //     response.success = true; //it means response = { success: true };
    //     response.meg = "successfully logged in"; // response = { meg: "successfully logged in" };
    //     return res.json(response);
    //   }
    // }
    // response.success = false;
    // response.meg= "login failed"
    // return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body) 
    const response = await user.register();
    return res.json(response);
  },
}

module.exports = { 
  output, 
  process,
};

// =====

