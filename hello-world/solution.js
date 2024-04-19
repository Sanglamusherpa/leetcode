function createhelloworld(){
    return function(){
        return "hello world";
    }
}
const a = createhelloworld();
console.log(a());