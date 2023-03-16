function fibonacci(num)
{
    if(num==1)
       return 0;
    if(num==2)  
       return 1;
    return fibonacci(num -1) + fibonacci(num -2);
}
console.log("Fibonacci(6) : " +fibonacci(6));
console.log("Fibonacci(8) : " +fibonacci(8));