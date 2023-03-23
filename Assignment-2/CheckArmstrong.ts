function checkArmstrong(data:number)
{
   //var res:boolean=false;
    let num = data;
    const len = String(num).split("").length;
    let res1 = 0;
    while(num){
       const last = num % 10;
       res1 += Math.pow(last, len);
       num = Math.floor(num / 10);
    };
    return res1 === data;
}
var res = checkArmstrong(153);
if(res)
{
console.log("It is Armstrong number");
}
else
{ console.log("It is not Armstrong number");
}