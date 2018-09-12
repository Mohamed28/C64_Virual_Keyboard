/*
	Author: Lucas Barretto e Silva
	Description: A Virtual C64 Keyboard
*/

/***************************|VARS|****************************/
var keys = {
	keySet_1: new Array(16),
	keySet_2: new Array(15),
	keySet_3: new Array(15),
	keySet_4: new Array(15),
	keySet_5: new Array(1),
	keySet_6: new Array(4)
};

var htmlElements = {
	row_1: document.getElementById('row_1'),
	row_2: document.getElementById('row_2'),
	row_3: document.getElementById('row_3'),
	row_4: document.getElementById('row_4'),
	row_5: document.getElementById('row_5'),
	aside: document.getElementById('aside')
};


/***************************|START|****************************/

window.onload = function () {
	openWindow();
	document.addEventListener('keydown', tap);
	setKeys(keys.keySet_1, 0, htmlElements.row_1);
	setKeys(keys.keySet_2, 16, htmlElements.row_2);
	setKeys(keys.keySet_3, 31, htmlElements.row_3);
	setKeys(keys.keySet_4, 46, htmlElements.row_4);
	setKeys(keys.keySet_5, 61, htmlElements.row_5);
	setKeys(keys.keySet_6, 62, htmlElements.aside);

}

/****************************|METHODS|**************************/

function openWindow() {
	window.open("index.html", "width=1000, height=650, menubar=no, titlebar=no, scrollsbar=no, toolbar=no, resizable=no");
	return false;

}

function closeWindow() {
	window.close();
}

function setKeys(row, offset, htmlElement) {

	for (var i = 0; i < row.length; i++) {
		let figure = document.createElement('figure');
		row[i] = document.createElement('img');
		row[i].setAttribute("id", "key_" + (i + offset));
		row[i].setAttribute("value", "%");
		row[i].src = "img/" + (i + offset) + ".png";
		row[i].addEventListener("mousedown", click);
		row[i];
		figure.appendChild(row[i]);
		htmlElement.appendChild(figure);
		console.log(row[i]);
	}
}

function click() {
	element = document.getElementById(this.id);
	element.style.top = "6px";
	setTimeout(function () { element.style.top = "0px"; }, 100);
}


function tap(event) {

}