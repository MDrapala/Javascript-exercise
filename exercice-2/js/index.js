'use strict';
class Drawbar {
	constructor(sum, nbr) {
		this.sum = sum;
		this.nbr = nbr;
	}
	get createElements() {
		document.body.style.width = '90%';
		document.body.style.margin = '30px auto 0';
		this.divBar(this.divSkill());
	}
	//Create Elements for first div
	divSkill() {
		var divSkill = document.createElement('div');
		divSkill.id = 'skill';
		this.styleSkill(divSkill);
		return document.body.appendChild(divSkill);
	}
	//Add style into first Div
	styleSkill(divSkill) {
		divSkill.style.overflow = 'hidden';
		divSkill.style.height = '18px';
		divSkill.style.backgroundColor = '#f7f7f7';
		divSkill.style.backgroundRepeat = 'repeat-x';
		divSkill.style.borderRadius = '0px';
		divSkill.style.display = 'grid';
		divSkill.style.gridTemplateRows = 'repeat(1,' + this.sum + 'px)';
		divSkill.style.gridTemplateColumns = 'repeat(auto-fit, minmax 250px, 1fr))';
		divSkill.style.gridAutoRows = '150px';
	}
	//Create Elements for seconde div
	divBar(divSkill) {
		var divBar = document.createElement('div');
		divBar.id = 'bar';
		this.styleBar(divBar);
		return divSkill.appendChild(divBar);
	}
	styleBar(divBar) {
		divBar.style.width = this.nbr + '%';
		divBar.style.height = '18px';
		divBar.style.backgroundColor = '#0e90d2';
		divBar.style.transition = 'width 0.6s ease';
	}
}
const bar = new Drawbar(1000, 30);
console.log(bar.createElements);
