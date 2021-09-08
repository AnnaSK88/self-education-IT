function fun(echo){
    console.log(echo)
};

fun("hello")//hello

function boo(aFunction){
    aFunction("boo")
}
boo (fun);//boo

console.log(fun)//[Function: fun]

fun(boo)//[Function: boo]

var moreFun = fun;
moreFun ("hello again")//hello again
function echoMarker(){
    return fun;
}
var bigFun = echoMarker();
bigFun("It there an echo?")//It there an echo?
