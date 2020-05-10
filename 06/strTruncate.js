function strtruncate()
{
    document.getElementById("truncate").style.visibility="hidden";
    var str=document.getElementById("strinput").value;
    var num=document.getElementById("charinput").value;
    console.log(str.length);
    var Truncstr=truncateString(str);
    document.getElementById("result").style.color="green";
    document.getElementById("result").innerHTML="Truncated String is : "+Truncstr;

    var strnew="";
    if(str.length==0)
        {
           document.getElementById("result").innerHTML= "Fill in the rrequired field...!!";
           document.getElementById("result").style.color="red";
           return;
        }
    function truncateString(str)
    {
         if (str.length <= num) 
        {
           strnew = str+"...";
           return strnew;
        }
        else
        {
            strnew =str.slice(0,num);
            return strnew;
        }
    

    }
}
function reset()
{
    document.getElementById("truncate").style.visibility="visible";
   document.getElementById("strinput").value="";
   document.getElementById("charinput").value="";
   document.getElementById("result").innerHTML="";
}