const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const addButton = document.querySelector('.addItem');

class item {
	constructor(itemName) {
		this.createItem(itemName);
	}

	createItem(itemName) {

		let itemDiv = document.createElement('div');
		itemDiv.classList.add('item');

		var input = document.createElement('input');
		input.type = "text";
		input.value = itemName;
		input.classList.add('inputItem');
		input.disabled = true;

		var edit = document.createElement('Button');
		edit.innerHTML = "EDIT";
		edit.classList.add('editButton');

		// edit.onclick = () => {
		// 	edit.innerHTML = "<span id=\"done\">DONE</span>";
		// 	input.disabled = false;
		// 	edit.onclick = () => {
		// 		edit.innerHTML = "EDIT";
		// 		input.disabled = true;
		// 	}
		// }

		edit.addEventListener('click', function(){

			if (edit.innerHTML == "DONE" && input.disabled == false) {
				edit.classList.remove('doneButton');
				edit.classList.add('editButton');
				edit.innerHTML = "EDIT";
				input.disabled = true;
				
			} else {

				edit.innerHTML = "DONE";
				input.disabled = false;
				edit.classList.remove('editButton');
				edit.classList.add('doneButton');

			}

		})

		var del = document.createElement('Button');
		del.innerHTML = "<img src=\"binImage.png\">";
		del.classList.add('deleteButton');
		del.onclick = () => {
				itemDiv.remove();
		}

		container.appendChild(itemDiv);

		itemDiv.appendChild(input);
		itemDiv.appendChild(edit);
		itemDiv.appendChild(del);

	}
}

addButton.addEventListener('click', check);
document.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		check();
	}
})

function check() {

	if(inputValue.value != "") {
		new item(inputValue.value);
	}

	inputValue.value = "";

}