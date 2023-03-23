function ChkPrime(num : number):any
{
    var isPrime:boolean=true;
    if (num > 1) 
    {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }   
    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    }
   }
    return isPrime;   
}
var num:number = 11; 
ChkPrime(num);

