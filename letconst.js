let m = 10

function get(){
    m=20
    console.log("inner =", m)
}


console.log("outer =",m)

get(m);

//by using if else
let c = 10

if(c == 10){
    c = 20
}

console.log(c);
