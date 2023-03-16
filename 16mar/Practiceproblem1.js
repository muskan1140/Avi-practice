function sum(k){
    if (k==0)
    return 0;
    return(k%10 + sum(parseInt(k/10)));
}

var number=12345;
var result=sum(number);
console.log("sum"+number+"is" + result);
