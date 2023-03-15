function mul(a){
    return function(b){
        if(b){
            return mul(a*b);
        }
        return a;
    }
}
let m = mul(10)(20)(30)(40)();
console.log(m)