"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  confirmPw = document.querySelector("#confirm-password"),
  name = document.querySelector('#names'),
  email = document.querySelector('#email'),
  registerBtn = document.querySelector("#registerBtn");
  // registerBtnMeg = document.querySelector("#registerBtn-meg");
registerBtn.addEventListener("click", function register(){
  if(!id.value) return alert("Fill out the register form")
  if(password.value !== confirmPw.value) return alert("Password confirmation failed");
  
  const req = {
    id: id.value,
    password: password.value,
    names: names.value,
    email: email.value,
  };
  // console.log(req)
  // console.log(JSON.stringify(req))
  //data deliver to backend
  fetch("/register", {
    method: "POST", 
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(req) //꼭 JSON 형태로 전달
  }).then((res) => res.json()).then((res) => {
    // const meg = res.meg;
    // console.log(res.meg);
    // registerBtnMeg.innerHTML = meg;

    if(res.success) {
      location.href = "/login";
    }else {
      alert(res.meg);
    }
  }).catch((err) => {console.error(new Error("Error occured during logging in"))});
});

