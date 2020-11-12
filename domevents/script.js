var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function createButton(li){
	var bttn = document.createElement("button");
	bttn.appendChild(document.createTextNode("delete"));
	li.appendChild(bttn);
	bttn.classList.add("deleteItem");
}

//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
for (var i=0; i<listItems.length; i++){
	var li = listItems[i];
 	createButton(li);
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + "  "));
	ul.appendChild(li);
	input.value = "";
	createButton(li);
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

 //1. If you click on the list item, it toggles the .done  class on and off.
 //When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
 function action(event) {
	if (event.target.tagName === 'LI'){
		event.target.classList.toggle("done");
	}
	if (event.target.tagName === 'BUTTON'){
		var bttn = document.getElementsByClassName("deleteItem");
		event.target.parentNode.remove();
	}
}

ul.addEventListener("click", action);

