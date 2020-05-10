var btn=document.getElementById("done");
btn.addEventListener("click", swapcase);
function swapcase()
{
    btn.style.visibility="hidden";
    var txt=document.getElementById("inputText");
    console.log(txt.value);
    var txtval=txt.value;
    var tempval="";
    var res= document.getElementById("result");
    if( txtval== " " )
    {
        // alert("empty");
        // console.log("ERROR");
        res.innerHTML= 'Error!!' ;
        res.style.color= "red" ;
    }
    for(var i=0;i<txtval.length;i++)
    {
        if (/^[A-Z]/.test(txtval[i]))
        {
            tempval += txtval[i].toLowerCase();
        }
        else
        {
            tempval +=txtval[i].toUpperCase();
        }  
    }
    res.innerHTML="String after changing case is : "+tempval;
  }
function reset()
{
    document.getElementById("inputText").value="";
    btn.style.visibility="visible";
    document.getElementById("result").innerHTML="";
}