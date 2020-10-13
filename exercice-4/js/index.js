'use strict';

function renderWorldMap(pays) {
    var createSpan = document.createElement('span');
    createSpan.textContent = pays + "\n / ";
    document.body.appendChild(createSpan);
    document.getElementById(pays).style.fill = "red";

}
