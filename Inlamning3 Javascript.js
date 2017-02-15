let text = document.getElementById("textInput");
let button = document.getElementById("addButton");
let list = document.getElementById("lista");
let idcounter = 0;
let selectedItem;
let listitems;
let deleteb = document.getElementById("deleteButton");
let change = document.getElementById("changeButton");
let addItem= function()
{
	
	var li = document.createElement("li");
  	li.appendChild(document.createTextNode(text.value));
 	li.setAttribute("id", "element" + idcounter); 
	li.addEventListener("click", selectItem); 
	list.appendChild(li);
	idcounter++;
	console.log("function");
};
let changeItem = function()
{
	selectedItem.innerHTML=text.value;
};
let deleteItem = function()
{
	selectedItem.parentNode.removeChild(selectedItem);
};
let selectItem = function(event)
{

	listitems=  document.getElementsByTagName("LI");
	selectedItem=event.target;
for(var i =0; i< listitems.length;i++)
{
	listitems[i].style.backgroundColor="white";
}
	selectedItem.style.backgroundColor="yellow";
	text.value=selectedItem.innerHTML;
	
		
};

button.addEventListener("click", addItem);
change.addEventListener("click", changeItem);
deleteb.addEventListener("click", deleteItem);
/*listitems.addEventListener("click", selectItem);*/