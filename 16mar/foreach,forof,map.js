//FOREACH()
const numbers=[20,4,77,44,12];
numbers.forEach((item, index, arr) => {
    arr[index] = item * 10;
});



const array1 = ['mu', 'sk', 'an'];

array1.forEach(element => console.log(element));

//MAP()
const numberss=[65,44,12,4]
const map1= numberss.map(x => x*2);

console.log(map1);

//FOROF()
var arr=[23,87,36,3,6,8]
for(let m of arr){
    console.log(m);
}