function AlphaOrder()
{
    document.getElementById("show").style.visibility="hidden";
    var arrParse="["+document.getElementById("arrRead").value+"]";
    var arr=JSON.parse(arrParse);
    let i=0;
    var newarr=[];
    for(x in arr)
    {
        newarr[i]=arr[x];
         i++;
    }
    var arr2=[];
    arr2=arr;
     string_sort(newarr);
    function string_sort(newarr)
    { 
        var i = 0, j; 
        while (i < newarr.length)
        { 
            j = i + 1; 
            while (j < newarr.length) 
            { 
                if (newarr[j] < newarr[i]) 
                { 
                    var temp = newarr[i]; 
                    newarr[i] = newarr[j]; 
                    newarr[j] = temp; 
                } 
                j++; 
            } 
            i++; 
        } 
    } 
    document.getElementById("result").innerHTML=" Before Sorting :"+arr2+"<br>"+"After Sorting : "+newarr;
    document.getElementById("result").style.color="seagreen";
 }
 function reset()
 {
    document.getElementById("result").innerHTML="" ;
    document.getElementById("show").style.visibility="visible";
 }