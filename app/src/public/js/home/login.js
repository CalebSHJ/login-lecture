"use strict";

const { post } = require('../../../routes/home');

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function login(){
  const req = {
    id: id.value,
    password: password.value,
  };
  console.log(req)
  console.log(JSON.stringify(req))
  //data deliver to backend
  fetch("/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(req) //꼭 JSON 형태로 전달
  });
});

