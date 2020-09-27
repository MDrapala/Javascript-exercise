'use strict';

class Drawbar {
	constructor(sum, nbr) {
		this.sum = sum;
		this.nbr = nbr;
	}

	/*
	 * Initalize All elements
	 */
	get createElements() {
		document.body.style.width = '90%';
		document.body.style.margin = '30px auto 0';
		this.divBar(this.divSkill());
	}

	/*
	 * Initalize body with divBar
	 * @return insert in the body divSkill
	 */
	divSkill() {
		var divSkill = document.createElement('div');
		divSkill.id = 'skill';
		this.styleSkill(divSkill);
		return document.body.appendChild(divSkill);
	}

	/*
	 * Initalize style CSS for the proportion of the background segment
	 * @param {feature} insert the creation of the background bar and responsive
	 */
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

	/*
	 * Initalize divSkill with divBar
	 * @param {feature} insert the creation of the background drawBar
	 * @return insert in the divBar into divSkill
	 */
	divBar(divSkill) {
		var divBar = document.createElement('div');
		divBar.id = 'bar';
		this.styleBar(divBar);
		return divSkill.appendChild(divBar);
	}

	/*
	 * Initalize style CSS for the proportion of the loaded segment
	 * @param {feature} insert the creation of the loading bar
	 */
	styleBar(divBar) {
		console.log(divBar);
		divBar.style.width = this.nbr + '%';
		divBar.style.height = '18px';
		divBar.style.backgroundColor = '#0e90d2';
		divBar.style.transition = 'width 0.6s ease';
	}
}

/*
 * Initalize size draw bar
 * @param {number} the total sum of the number
 * @param{number} the proportion of the loaded segment of the bar
 */
const bar = new Drawbar(1000, 30);
console.log(bar.createElements);
