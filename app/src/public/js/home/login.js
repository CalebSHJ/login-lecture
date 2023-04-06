"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#loginBtn"),
  loginMeg = document.querySelector("#login-meg");

loginBtn.addEventListener("click", function login(){
  const req = {
    id: id.value,
    password: password.value,
  };
  // console.log(req)
  // console.log(JSON.stringify(req))
  //data deliver to backend
  fetch("/login", {
    method: "POST", 
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(req) //꼭 JSON 형태로 전달
  }).then((res) => res.json()).then((res) => {
    const meg = res.meg;
    console.log(res.meg);
    loginMeg.innerHTML = meg;

    if(res.success) {
      location.href = "/";
    }else {
      alert(res.meg);
    }
  }).catch((err) => {console.error(new Error("Error occured during logging in"))});
});

