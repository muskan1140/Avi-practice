//find the value of first element with a value over 40

const ages=[3,70,18,44];
function checkage(age){
    return age > 40;
}
function myfunction(){
    console.log(ages.find(checkage));
}

myfunction();

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);