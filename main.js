
console.log("hi");
const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");
console.log("hi");

let n = 0;
let queue = [];
console.log("hi");
btnCreateNumber.onclick = () => {
    n += 1;
    //queue.push(n);
    queue.push.call(queue, n);
    spanNewNumber.innerText = n;
    spanQueue.innerText = JSON.stringify(queue);
};

