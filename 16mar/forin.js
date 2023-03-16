let person ={
    firstName:"muskan",
    lastname:"kapoor",
    year:2000,
    "like this movie":true
};

for(obj in person){
    console.log(`${obj} = ${person[obj]}`);
}