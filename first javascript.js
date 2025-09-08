
let n = prompt ("Enter any numbers");

let arr = [];

for(let i=1; i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev , curr)=>{
       return prev+ curr;
});

console.log(sum);

let pro = arr.reduce((prev , curr)=>{
       return prev * curr;
});

console.log(pro);