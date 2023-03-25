let per1={
    Name:"Muskan kapoor",
    age:23,
    printdetails:function(m,k,){
        return(this.age+m+k);
    }
}

let per2={
    Name:"Ashish Verma",
    age:27,

}

// let k=(per1.printdetails.bind(per2,"city","country"));
// console.log(k());

let k=(per1.printdetails.bind(per2));
console.log(k("city" ,"country"));

