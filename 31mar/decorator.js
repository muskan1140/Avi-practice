function tell() {
    return "hello";
}

function decor(fn) {
    function fn1 () {
        let result = fn();
        result=result.toUpperCase();
        return result;
    }

    return fn1;
}


//

console.log(tell());

let say = decor(tell);
console.log(say());