function outer(){
    const outerVar = "outer var";

     function inner() {
        const innerVar = "Inner var";
        console.log(outerVar);
        console.log(innerVar);
    }
    return inner; 
}
const innerFn = outer();
innerFn()