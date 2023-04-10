"use strict"

// *** backend files connection map ***
//src/routes/home/home.ctrl.js => src/routes/hoem/index.js => app/app.js => .bin/www.js

const express = require('express');
const router = express.Router(); 

const ctrl = require("./home.ctrl");

router.get('/',  ctrl.output.home);
router.get('/login', ctrl.output.login); 
router.get('/register', ctrl.output.register);
router.post('/login', ctrl.process.login); // frontend에서 post로 보낸 data 받음
router.post('/register', ctrl.process.register);

module.exports = router; 