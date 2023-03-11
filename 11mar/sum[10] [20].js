function sum(a){
    return function (b){
        return a+b;
    }
}
console.log(sum(10)(20));

if(undefined===null)
{
    console.log(true);
}

else
    {
        console.log(false);
     
    }

