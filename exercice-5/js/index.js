'use strict';

class Users {
	constructor(lastname, firstname, email, password) {
		this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.password = password;
	}

  /*
	 * Initialize All value in input
	 */
	get Form() {
    if(this.valueLastname(this.lastname)){
      if(this.valueFirstname(this.firstname)){
        if(this.valueEmail(this.email)){
          if(this.valuePassword(this.password)){
            alert('Successful registration')
          }
        }
      }
    }
  }

  /*
   * check the value enter
   * @param {feature} enter a value that is checked by a regex
	 * @return true or false in the Form function
	 */
	valueLastname(lastname) {
    var regex = new RegExp(/^[a-zA-Z]+$/i);
    var lastnameResult = regex.test(lastname);
    if(lastnameResult == false)
    {
      alert('Please enter a valid lastname');
      return false;
    }
    return true;
	}

  /*
   * Check the value enter
   * @param {feature} enter a value that is checked by a regex
	 * @return true or false in the Form function
	 */
	valueFirstname(firstname) {
    var regex = new RegExp(/^[a-zA-Z]+$/i);
    var firstnameResult = regex.test(firstname);
    if(firstnameResult == false)
    {
      alert('Please enter a valid firstname');
      return false;
    }
    return true;
  }
  
  /*
   * Check the value enter
   * @param {feature} enter a value that is checked by a regex
	 * @return true or false in the Form function
	 */
  valueEmail(email){
    var regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    var emailResult = regex.test(email);
    if(emailResult == false)
    {
      alert('Please enter a valid email');
      return false;
    }
    return true;
  }

  /*
   * Check the value enter
   * @param {feature} enter a value that is checked by a regex
	 * @return true or false in the Form function
	 */
  valuePassword(password){
    var regex = new RegExp('\\w+');
    var passwordResult = regex.test(password);
    if(passwordResult == false)
    {
      alert('Please enter a valid password');
      return false;
    }
    return true;
  }
}

function myForm() {
    let lastname = document.getElementById('lastname').value;
    let firstname = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    /*
     * Check the value enter
     * @param {feature} enter values ​​retrieve in the form
     */
    const form = new Users(lastname, firstname, email, password);
    console.log(form.Form);
}