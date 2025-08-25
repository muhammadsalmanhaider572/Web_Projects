
let text = document.querySelector("h2");

console.dir(text.innerHTML);
text.innerHTML = text.innerHTML + " from Apna College Students.";


let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerHTML =  "This is my div new unique values " + idx;
    idx++;
}
// divs[0].innerText = divs[0].innerText + " new unique value 1";
// divs[1].innerText = divs[1].innerText + " new unique value 2";
// divs[2].innerText = divs[2].innerText + " new unique value 3";



