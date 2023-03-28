//Method 1
const counter = s => [...s].reduce((a,c) =>(a[c] = ++a[c] ||1) && a, {})
console.log(
counter("danishh")
)


//Method 2
let string ="danishsoma";
function getCounts(string){
    const countt={};




   for (let i =0; i<string.length; i++)
    { const ch= string[i];
      if(!countt[ch]){
        countt[ch] = 0;
      }
      countt[ch]++;
    }
    return countt;

}

console.log(getCounts(string));


//Another way to do it
let string1 ="danishh";
function getCounts(string1){
    const counterr={};
   for (let i in string1)
     counterr[string1[i]] = (counterr[string1[i]] || 0) + 1
     return counterr;

}

console.log(getCounts(string1));


//Using Map

var arr="Danishsoma";
const map=new Map();

for(let i=0; i<arr.length;i++){
  if(map.has(arr[i]) ==false){
    map.set(arr[i],1);
  }else {
    let count =map.get(arr[i]);
    count++;
  map.set(arr[i],count);
  }
}
const a =Object.fromEntries(map);
console.log("Result :-",a);
