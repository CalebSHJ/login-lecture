"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function login(){
  const req = {
    id: id.value,
    password: password.value,
  };
  console.log(req)
});

 