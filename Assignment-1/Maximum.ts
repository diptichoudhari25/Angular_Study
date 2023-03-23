
 function Maximum(Arr : number[]) : number
 {
     const max: number = Math.max(...Arr)
     return max;
 }

 var Arr : number[] = [23,89,6]
 var Ret : number = 0;
 Ret = Maximum(Arr);
 console.log("Maximum Numer is : "+Ret)

