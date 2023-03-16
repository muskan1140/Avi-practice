let object= {
    firstName: "Muskan",
    lastName: "kapoor",
    rollno:7,
    year:2000,
    collegename:"ycet", 
    age:function(){
        return (2023-this.year);
    }
};
console.log(object.age());
