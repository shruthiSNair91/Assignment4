var btn=document.getElementById("show");
btn.addEventListener("click",showpattern);
function showpattern()
{
    btn.style.visibility="hidden";
    var pattern="";
    for(var i=0;i<=3;i++)
    {
        for(var j=0;j<=i;j++)
        {
          pattern +=" *   ";
        }
        pattern +="<br>";
    }
    document.getElementById("PatternDisp").innerHTML=pattern;
}
function reset()
{
    document.getElementById("PatternDisp").innerHTML="";
    btn.style.visibility="visible";
}