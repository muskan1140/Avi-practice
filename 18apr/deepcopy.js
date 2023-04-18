let obj1= {
    name:"Muskan",
    location: {
        state : "j&k",
        city:"jammu"
    }
}

let obj2=obj1;
obj2.name="test";
console.log(obj1)
console.log(obj2)

//Using Object.assign
let obj3= {
    name:"Muskan",
    location: {
        state : "j&k",
        city:"jammu"
    }
}

let obj4 = Object.assign({},obj3)
obj4.name="test";
console.log(obj3)
console.log(obj4)
