"use strict"

// *** backend files connection map ***
//src/routes/home/home.ctrl.js => src/routes/hoem/index.js => app/app.js => .bin/www.js

const output ={
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
    console.log(req.body); 
  },
}

module.exports = { 
  output, 
  process,
};