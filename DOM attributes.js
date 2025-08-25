

// let id = document.querySelector("div");
// console.log(id);

// id.style.backgroundColor = "yellow";
// id.style.fontSize = "20px"

// id.innerHTML = "Hello!!! JS....."
// id.style.textAlign = "center"


let btn =document.createElement("button");
btn.innerHTML = "Click me!";
console.log(btn);

let id = document.querySelector("div");
id.before(btn);

btn.style.color = "white";
btn.style.backgroundColor = "red";

let parah = document.querySelector("p");
console.log(parah.classList.add("newclass"));