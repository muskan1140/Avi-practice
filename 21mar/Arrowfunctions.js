//Arrow Functions allow us to write shorter functions.It allows you to create functions in a cleaner way compared to regular functions
let sub= function(x,y){
    return x-y;
}
console.log(sub(20,5));  //simple function




let user=(person) => {
    console.log("Hello " + person);
    return 1;
}

console.log(user('Kapoor')); //arrow function


//Multiply two numbers using arrow function

let mul= (num1,num2) => num1*num2;

let result = mul(9,10)

console.log(result);

