function area(r) {
    return Math.PI*r*r;
}

function circum(r) {
    return 2*Math.PI*r;
}

function cal(arr, fn) {
    let arr1 =[];
    for(let i of arr) {
        arr1.push(fn(i));
    }
    return arr1;
}

let arr=[1,2,3,4,5];

console.log(cal(arr, area));