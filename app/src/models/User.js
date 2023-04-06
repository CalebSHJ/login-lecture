"use strict";

//./routes/home/home.ctrl.js 에서 frontend에서 보낸 data를 받아서
// UserStorage에 있는 data와 비교해서 return 함.

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body; // frontend에서 받은 data
  }

  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);//UserStorage에서 받은 data.
    // console.log(id, password);
    //두 data를 비교함.
    if(id) {
      if(id === body.id && password === body.password) {
        return { 
          success: true, 
          meg: "successfully logged in",
        };
      };
      return {success: false, meg: "Wrong password"}
    }
    return { success: false, meg: "no id exist"}
  }
}

module.exports = User;