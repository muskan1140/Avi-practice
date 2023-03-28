function*test(){
    try{
        yield 1;
        throw new Error("found new error")
        yield 2;
        yield 3; 
    }
    catch(error)
    {
        console.log(error);
    }
}
const it = test()
console.log(it.next())

it.throw("error found")