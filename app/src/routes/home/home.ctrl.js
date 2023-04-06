"use strict"

// *** backend files connection map ***
//src/routes/home/home.ctrl.js => src/routes/hoem/index.js => app/app.js => .bin/www.js
const users = {
  id: ["cnmmusic", "moonstar", "littlelight"],
  password: ["1234", "12345", "123456"],
}

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

    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.password[idx] === password) {
        return res.json({
          success: true,
          meg: "successfully login"
        });
      }
    }
    return res.json({
      success: false,
      meg: "login failed",
    });
  },
}

module.exports = { 
  output, 
  process,

};