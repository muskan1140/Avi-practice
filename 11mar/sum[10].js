function muskan(a)
{
    return function muskan1(b)
    {
        return a+b;
    }
}
let m = muskan(10);
console.log(m(20));