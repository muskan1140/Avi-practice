let per1={
    Name:"Muskan kapoor",
    age:23,
    printdetails:function(){
        return(this.age);
    }
}

let per2={
    Name:"Ashish Verma",
    age:27,

}

console.log(per1.printdetails.call(per2));
