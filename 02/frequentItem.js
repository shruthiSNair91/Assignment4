function frequentItem()
{
    document.getElementById("find").style.visibility="hidden";
    var getArr="["+document.getElementById("ArrInput").value+"]";
    var inputArr=JSON.parse(getArr);
    var element=0;
    var count=0;
    for(var i=0;i<inputArr.length;i++)
    {
        var tmpElem=inputArr[i];
        var tmpCount=0;
        for(var j=0;j<inputArr.length;j++)
        {
            if(inputArr[j]==tmpElem)
            {
                tmpCount++;
                if(tmpCount>count)
                {
                    element=tmpElem;
                    count=tmpCount;
                }
            }
        }
    }
    if(inputArr.length != 0)
    {   
        document.getElementById("result").innerHTML=element+" is the most frequent item with count : "+count;
        document.getElementById("result").style.color="seagreen";
        return;
    }
    else
    {
        document.getElementById("result").innerHTML="Invalid Inputs" ;
        document.getElementById("result").style.color="red";
    }
}
function reset()
{
    document.getElementById("ArrInput").value=""
    document.getElementById("find").style.visibility="visible";
    document.getElementById("result").innerHTML="";

}