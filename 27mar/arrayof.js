//Array.of is a method that will take the list of  arguments and converting into am array.

console.log(Array.of('mus',2,'kan',true));



//Array.find
// The find() returns the first element in provided array that satisfies provided testinf funtion
let array1 = [5, 12, 8, 130, 44];

let  found = array1.find(element => element > 10);

console.log(found);

//findIndex
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
// If no elements satisfy the testing function, -1 is returned.

let arr= [5, 12, 8, 130, 44];

let isLargeNumber = (element) => element > 13;

console.log(arr.findIndex(isLargeNumber));

//Array.fill()
let ar=[1,2,3,4];
//fill with 0 from position 2 until position 4
console.log(ar.fill(0,2,4));

//fill with 5 from position 1
console.log(ar.fill(5,1));

//forEach()
// The forEach() method executes a provided function once for each array elemen-t.
//Return type of for Each is UNDEFINED.
let array2 = ['m', 'u', 's' , 'k' , 'a' , 'n'];

array2.forEach(element => console.log(element));


//SETS:- Enables you to store unique values of any type,whether Primitive or Object references
//If any dpulicates present it will completely ignore them
