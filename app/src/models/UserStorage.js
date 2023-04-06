"use strict";

class UserStorage {
  static #users = { //static은 다른 파일에서 new UserStoragea로 받지 않고 바로 UserStorage.users로 접근하도록 한다.
    id: ["cnmmusic", "moonstar", "littlelight"],
    password: ["1234", "12345", "123456"],
    names: ["Caleb", "Moon", "Calmoon"],
  } // id, password, names 같은 key를 field라고 부른다.
  // Data는 항상 function을 통해서 은닉하게 전달되도록 해야한다. 
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {}) 
    return newUsers;
  }
}

module.exports = UserStorage;