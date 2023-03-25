//call()
function getage(){
     console.log(this.age);
 }

 obj={
     age:23,

 }
 getage.call(obj);

//apply()
function getage(d,g){
    console.log(this.age+d+g);
}

obj1={
    age:25,
}
getage.apply(obj1,[20,30]);

