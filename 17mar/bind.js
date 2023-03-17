console.log("welcome to world")


let obj  ={
    name:"muskan",
    age:23,
}

function getAge(){
    console.log(this.age)
}

let x = getAge.bind(obj)
x()

//if there are two this.name
console.log("welcome to world")


let objj  ={
    name1:"muskan",
    age:23,
    nestobj:{
        name: "test",
        getname:function(){
            console.log(this.name,this.name1)
        }
    }
}

//this.name only takes the actual parameter value i.e name here
//there's no reference of this.name1