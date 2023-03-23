function CheckString(strVal) {
    var result = false;
    //result = strVal.includes("Marvellous",0);
    var data = strVal.indexOf("Marvellous");
    if (data >= 0) {
        result = true;
    }
    return result;
}
var res;
res = CheckString("Pune Kothrud Marvellous Infosystems");
if (res)
    console.log("String contains Marvellous in it");
else
    console.log("String does not contain Marvellous in it");
