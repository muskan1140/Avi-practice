//By using spread operator

let obj1= {
    name:"Muskan"
}

let obj2={...obj1};
obj2.name="test";
console.log(obj1.name)
console.log(obj2.name)