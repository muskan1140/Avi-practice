function concat(num) {
    return num.concat(num);
}

let num = concat([1,2,1]);
console.log(num);