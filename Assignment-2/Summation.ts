function Summation(...Arr : number[]) : number
{
    let Sum : number = 0;
    let Cnt : number = 0;
    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt]; 
    }
    return Sum;
}

var Ret : number = 0;
Ret = Summation(23,6,7,4,5,7);
console.log("Addition is : "+Ret);
