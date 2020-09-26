'use strict';

var gridGenerator = function (xAsis, yAsis) {
	this.xAsis = xAsis;
	this.yAsis = yAsis;
};

function generateColor(td) {
	var color = ['green', 'red', 'purple', 'blue', 'brown'];
	setInterval(function () {
		td.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
	}, 1000);
}

function generateMatrice(xAsis, yAsis) {
	var createTable = document.createElement('table');
	document.body.appendChild(createTable);
	for (var i = 0; i < xAsis; i++) {
		var createTr = document.createElement('tr');
		createTable.appendChild(createTr);
		for (var j = 0; j < yAsis; j++) {
			var createTd = document.createElement('td');
			createTd.textContent = j;
			generateColor(createTd);
			createTr.appendChild(createTd);
		}
	}
}

gridGenerator.prototype.run = function () {
	this.generate(this.yAsis, this.xAsis);
};

var generate = new generateMatrice(5, 5);
