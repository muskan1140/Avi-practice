//The instanceof operator tests to see if the prototype property of a
// constructor appears anywhere in the prototype chain of an object. 
//The return value is a boolean value.

function fruit(apple, kiwi ,orange) {
    this.apple = apple;
    this.kiwi=kiwi;
    this.orange=orange;
}

let auto = new fruit('Banana' , 'Guava' , 2829);

console.log(auto instanceof fruit); //true

console.log(auto instanceof d); //error

console.log(auto instanceof Object); //true