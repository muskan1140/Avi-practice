let getName = function(){
    console.log(this.name);
}

let obj = {
    name:"muskan",
    age:23,
};


getName.call(obj);