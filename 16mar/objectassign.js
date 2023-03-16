let target = { a: 1, b: 2 };
let output = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, output);

console.log(target);
console.log(returnedTarget === target);