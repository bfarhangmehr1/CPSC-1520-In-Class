document.querySelector('form.login').addEventListener('submit', function (evt) {
	// the evt.target is the form element
	var formElement= evt.target;
	// a <form> HTML elements has a collection of called elemnts 
	// which hold vlaues that will be submitted from the form.
	// each input or other "named" form element on the form 
	//will have the control;s name attributes as a "property" (or, an index) n the elemtns collections
	var user = formElement.elements.usernameId;
	var pass = formElement.elements.passwordInfo;
	// any property can be accessed as though it were a string -like "index" to an array
	var pass2 = formElement.elements["passwordInfo"]; 
	//pass2 is an <input type="password"> elements in the elements collection
	//pass2 has a property called "name" and a property called "value" Form these the form can construct a naem -value pair to submit to The web server

	var valid = true;

	// check the username, should be email
	if (user.value.indexOf('@') == -1) {
		valid = false;
		user.classList.add('error');
	} else {
		user.classList.remove('error');
	}

	// check password, b/w 6 and 10 chars
	if (pass.value.length < 6 || pass.value.length > 10) {
		valid = false;
		pass.classList.add('error');
	} else {
		pass.classList.remove('error');
	}

	if (valid == false) {
		evt.preventDefault();
	}
});