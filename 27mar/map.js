const map1=new Map();
map1.set([1, 'Muskan'] , [2,'test']);

console.log(map1);


//For-Each in Map

const map2 = new Map();
map1.set(3,'kapoor')
    .set(2,'test')

map1.forEach((val,key) => console.log(val,key));   