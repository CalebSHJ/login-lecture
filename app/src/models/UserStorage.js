"use strict";

//data를 data server로부터 받아서 frontend에서 받은 data와 비교할 수 있게
//parsing 해서 User.js로 export함.  

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
  //getUserInfo에 id값은 넣으면 id에 맞는 password, name이 출력되도록하는 method
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // key값들로 만 array가 만들어짐=> [id, password, names]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx]; //info는 usersKey에서 받아온 key 값들이다. 
      return newUser;
    }, {});//{}은 초기값으로 만들어진 object
 
    return userInfo;
   
  }
}

module.exports = UserStorage;