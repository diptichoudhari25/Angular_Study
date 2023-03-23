function fibonacci(num:number) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
var num:number=21;
for(let i = 0; i < num; i++) {
    var res = fibonacci(i);
    if(res>num){
        break;
    }
    else{
        console.log(res);
    }   
}