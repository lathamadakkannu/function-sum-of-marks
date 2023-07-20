function sum(tam,eng,mat,sci,soc,name)
{
	document.write("name="+name+"<br>");
	let total=tam+eng+mat+sci+soc;
	let average=(total/5);
	document.write("total="+total+"<br>")
	return "average="+average+"<br>";
	
}

var a=sum(91,85,70,89,90,"Latha")
{
	document.write(a+"<br>"+"<br>");
}


var b=sum(90,87,80,76,93,"Nisha")
{
	document.write(b+"<br>"+"<br>");
}