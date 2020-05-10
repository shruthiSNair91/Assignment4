function PrimeOrNot()
{
    document.getElementById("Show").style.visibility="hidden";
    var num=document.getElementById("numArray").value;
    var disp=document.getElementById("Pnot");
    if(isNaN(num[0]))
    {   
      disp.innerHTML="Invalid input..!!";
      disp.style.color="red";
    }
    else
    {
      var check="["+document.getElementById("numArray").value+"]";
      console.log(check);
      var fnum=JSON.parse(check);
      if(fnum.length==0)
      { 
        console.log(fnum.length);
        disp.style.color="red";
        disp.innerHTML="Error..!! Field cannot be empty"; 
        return false;
      }
      else if(fnum[0]=== 0)
      {
        disp.innerHTML="0 is neither prime nor composite";
        disp.style.color="brown";
        return false;
      }
      else if ( fnum[0]=== 1)
      {
        disp.innerHTML="1 is neither prime nor composite";
        disp.style.color="brown";
        return false;
      }
      else if(fnum[0]=== 2)
      {
        disp.innerHTML=" 2 is a prime number";
        disp.style.color="green";
        return true;
      }
      else
      { 
        for(var x = 2; x < fnum[0]; x++)
        {
          if(fnum[0] % x === 0)
          {
            disp.style.color="brown";
            disp.innerHTML=fnum[0]+" is NOT a prime number";
            return false;
          }
        }
        disp.style.color="green";
        disp.innerHTML=fnum[0]+" is a prime number";
        return true;  
      }
    }
}
function reset()
{
    document.getElementById("numArray").value="";
    document.getElementById("Show").style.visibility="visible";
    document.getElementById("Pnot").innerHTML="";
}

