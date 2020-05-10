function checkOddEven(val)
{
    if (val %2 == 0)
        return true;
    else
        return false;
}

function evenodd()
{
   var res=document.getElementById("numResult");
   var i = 0;
   while(i <= 15)
   {
        var text;
        if (checkOddEven(i))
        {
            text = i + "- Even Number";
        }
        else
        {
            text = i + "- Odd Number";
        }
        res.innerHTML += text + "<br>";
        i++;
   }
}

