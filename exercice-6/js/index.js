'use strict';

class checkPhoneNumber {
	constructor(numberPhone) {
		this.numberPhone = numberPhone;
	}
    /*
	 * Initialize All value in input
	 */
	get check() {
        if(this.valuePhone(this.numberPhone)){
            return true;
        } else {
            return false;
        }
       
    }

   /*
    * check the value enter
    * @param {feature} enter a value that is checked by a regex
    * @return true or false in the Form function
    */
	valuePhone(numberPhone) {
    var regex = new RegExp(/^(33|0)(6|7|1)\d{8}$/gm);
    var phoneResult = regex.test(numberPhone);
    if(phoneResult == false)
    {
      return false;
    }
    return true;
	}
}

let numberPhone = "33128736195";
/*
 * Check the value enter
 * @param {feature} enter values ​​retrieve in the form
 */
const form = new checkPhoneNumber(numberPhone);
console.log(form.check);
