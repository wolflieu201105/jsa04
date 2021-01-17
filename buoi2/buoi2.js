// const h1Element = document.getElementById("hello");
// console.log(h1Element);



// const h1HiClass = document.getElementsByClassName("hi");
// h1HiClass[0].innerText = "1234";
// h1HiClass[1].innerText = "4321";
// h1HiClass[2].style.color = "red";
// h1HiClass[2].innerHTML = `
// <p>Hello</p>
// <h3>Hello</h3>
// `;
// h1HiClass[1].style.fontSize = "25px";
// console.log(h1HiClass);



// let a = 10;
// console.log(`i have ${a} ${a === 1 ? 'apple' : 'apples'}`);

//arrow function
// function add(a,b) {
//     return a + b;
// };
// const add = (a, b) => {
//     return a + b;
// };
// const add = (a, b) => a + b;

// event listener
// const h1Element = document.getElementById("hello");
// let times = 0;
// h1Element.addEventListener('click', () => {
//     times += 1;
//     h1Element.innerText = `you clicked ${times} times`;
// });
let a = null;
const minus = document.getElementById("minus");
const color = document.getElementById("color");
const plus = document.getElementById("plus");
const number = document.getElementById("number");
color.addEventListener('click', () => {
    number.style.color = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
});
minus.addEventListener('click', () => {
    a = Number(number.innerText);
    a -= 1;
    if (a < 0) {
        a = 10;
    }
    number.innerText = a;
});
plus.addEventListener('click', () => {
    a = Number(number.innerText);
    a += 1;
    if (a > 10) {
        a = 0;
    }
    number.innerText = a;
});