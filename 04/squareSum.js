var btn=document.getElementById("sum");
btn.addEventListener("click",squaresum);
function squaresum()
    {
        btn.style.visibility="hidden";
        if(isNaN(document.getElementById("numArray").value))
        {   
            document.getElementById("result").innerHTML="Invalid Input" ;
            document.getElementById("result").style.color="red";
        }   
        var arrElements="["+document.getElementById("numArray").value+"]";
        var txtval=JSON.parse(arrElements);
        var sqr=0;
        if(txtval=="")
        {
            document.getElementById("result").innerHTML="Invalid Input" ;
            document.getElementById("result").style.color="red";
            return false;
        }       
        for(var i=0;i<txtval.length;i++)
        {
            sqr += (txtval[i]*txtval[i]);
        }
        document.getElementById("result").innerHTML="Sum of Squares = "+sqr;
        document.getElementById("result").style.color="seagreen";
    }
function reset()
{
    document.getElementById("numArray").value="";
    document.getElementById("result").innerHTML="";
    btn.style.visibility="visible";
}
