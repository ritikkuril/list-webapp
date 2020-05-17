var value=document.getElementById("value");
var enter=document.getElementById("enter");
var ul=document.querySelector("ul");
var de=document.createElement("button");
enter.addEventListener("click",function()
{
	if(value.value.length>0)
	{
var li=document.createElement("li");
var de=document.createElement("button");
li.appendChild(document.createTextNode(value.value));
li.appendChild(document.createTextNode(" "));
de.appendChild(document.createTextNode("Delete!!"));
li.appendChild(de);
ul.appendChild(li);
value.value="";
de.addEventListener("click",function()
{
	li.removeChild(de); 
ul.removeChild(li);


})

}


})

