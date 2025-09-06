

// let id = document.querySelector("div");
// console.log(id);

// id.style.backgroundColor = "yellow";
// id.style.fontSize = "20px"

// id.innerHTML = "Hello!!! JS....."
// id.style.textAlign = "center"


// let btn =document.createElement("button");
// btn.innerHTML = "Click me!";
// console.log(btn);

// let id = document.querySelector("div");
// id.before(btn);

// btn.style.color = "white";
// btn.style.backgroundColor = "red";

// let parah = document.querySelector("p");
// console.log(parah.classList.add("newclass"));



let modebtn = document.querySelector("#btn1");  // selects the button with id="btn1"
let currMode = 'Light';                         // starting mode is Light

modebtn.addEventListener("click", () => {
    if (currMode == 'Light') {                  // if current mode is Light
        currMode = "dark";                      // switch to dark
        document.querySelector("body").style.backgroundColor = "black";
    } else {                                    // if current mode is Dark
        currMode = "Light";                     // switch back to light
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);                      // log mode in console
});


