let obj1 = {
    name: "Muskan",
    age: 23
}

let obj2 = {
    name: "Muskan",
    age: 23
}

let result= (obj1 === obj2) ? true : false;
console.log(result)   //False

let result1= (JSON.stringify(obj1) === JSON.stringify(obj2)) ? true : false;
console.log(result1)  //True
