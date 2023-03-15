function factorial(m){
    if (m == 0) {
        return 1;
    }
    
    return m * factorial(m - 1);

}
let y=factorial(8);
console.log(y);
