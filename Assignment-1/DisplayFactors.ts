function DisplayFactors(num : number)
{
  for(let i = 1; i <= num; i++) {
    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}
}
var num:number = 20; 
console. log("Display factor of "+num);
DisplayFactors(num);
