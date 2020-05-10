var btn=document.getElementById("find");
btn.addEventListener("click",find);
function find()
{
    btn.style.visibility="hidden";
    var fstnum=parseInt(document.getElementById("integer1").value) ;
    var secnum=parseInt(document.getElementById("integer2").value);
    findLarge();
    function findLarge()
    {
        if(fstnum > secnum)
        {
            document.getElementById("result").innerHTML=fstnum+" is larger."
            document.getElementById("result").style.color="seagreen";
        }
        else if(secnum > fstnum)
        {
            document.getElementById("result").innerHTML=secnum+" is larger."
            document.getElementById("result").style.color="seagreen";
        }
        else if(fstnum == secnum)
        {
            document.getElementById("result").innerHTML="Both are same";
            document.getElementById("result").style.color="seagreen";
        }
        else
        {
            document.getElementById("result").innerHTML="Invalid Inputs";
            document.getElementById("result").style.color="red";
        }
    }
}
function reset()
{
    document.getElementById("integer1").value="";
    document.getElementById("integer2").value="";
    document.getElementById("result").innerHTML="";
    btn.style.visibility="visible";
}