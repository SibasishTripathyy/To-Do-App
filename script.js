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

		container.appendChild(itemDiv);

		itemDiv.appendChild(input);

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