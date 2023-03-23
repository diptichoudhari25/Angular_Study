function CheckString(strVal:string):boolean
{
    let result:boolean=false;
    //result = strVal.includes("Marvellous",0);
    let data = strVal.indexOf("Marvellous");

     if(data>=0)
     {
        result=true; 
     } 
    return result;
}

var res:boolean;
res=CheckString("Pune Kothrud Marvellous Infosystems");

if(res)
 console.log("String contains Marvellous in it");
 else
 console.log("String does not contain Marvellous in it");