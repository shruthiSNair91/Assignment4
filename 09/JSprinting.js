function JSprint()
{
    var arr="javascript";
    var char;
    var  pattern="";
    var a = 0;
    var pat = "";
    for (char of arr)
    {  
        pat += char;
        document.write(pat + "<br>");
    }
  
    //document.getElementById("show").style.visibility="hidden";
}
function reset()
{
    document.getElementById("result").innerHTML="";
    document.getElementById("show").style.visibility="visible";
}