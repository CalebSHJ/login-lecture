"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  confirmPw = document.querySelector("#confirm-password"),
  firstName = document.querySelector("#first-name"),
  lastName = document.querySelector("#last-name"),
  registerBtn = document.querySelector("#registerBtn");
  // registerBtnMeg = document.querySelector("#registerBtn-meg");
registerBtn.addEventListener("click", function register(){
  const req = {
    id: id.value,
    password: password.value,
    confirmPw: confirmPw.value,
    firstName: firstName.value,
    lastName: lastName.value,
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
      location.href = "/logn";
    }else {
      alert(res.meg);
    }
  }).catch((err) => {console.error(new Error("Error occured during logging in"))});
});

