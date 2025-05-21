
// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
		form.addEventListener('submit', function (event) {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		}, false)
	})
})()
*/
// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fEmail = document.getElementById("fEmail");
	const fPhone = document.getElementById("fPhone");

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorLastN = document.getElementById("errorLastN");
	const errorEmail = document.getElementById("errorEmail");  
	const errorPhone = document.getElementById("errorPhone");  
	
	
	// Validate fields entered by the user: name, phone, password, and email
	if(containsNumber(fName.value)){
		fName.classList.add("is-invalid")
		fName.setCustumValidity("Name must not contain numbers.")
		errorName.innerHTML="The field must not contain numbers."
	}
	else{
		fName.classList.remove("is-invalid")
		errorName.innerHTML="This field is required and must have, at least, 3 characters"
	}
	if(containsNumber(fLastN.value)){
		fLastN.classList.add("is-invalid")
		errorLastN.innerHTML="The field must not contain numbers."
	}
	else{
		errorLastN.innerHTML="This field is required and must have, at least, 3 characters"
	}
	
	if(!onlyNumbers(fPhone)){
		fPhone.classList.add("is-invalid")
	}

	//var form = document.getElementById("form")
	//form.classList.add("was-validated")

}

function containsNumber(value){
	return /\d/.test(value);
}

function onlyNumbers(value){
	return /^\d+$/.test(value);
}

function containsLetter(value){
	return /[A-Za-z]]/.test(value);
}