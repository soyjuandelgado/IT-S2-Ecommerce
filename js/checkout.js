
// Example starter JavaScript for disabling form submissions if there are invalid fields
/* (function () {
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
})() */

// Exercise 6
function validate() {
	let validForm = true;

	const form = document.getElementById("formCheckout");
	const inputs = form.querySelectorAll("input");
	
	// Clean inputs
	inputs.forEach(input => {
		let validInput = true;
		
		input.value = input.value.trim();
		console.log(`${input.id} = '${input.value}'`);
		switch (input.id) {
			case "fName": 
			case "fLastN":
				validInput = validName(input.value);	
				break;
			case "fAddress":
				validInput = validLength(input.value, 3);
				break;
			case "fPhone":
				validInput = validPhone(input.value);
				break;
			case "fEmail":
				validInput = validEmail(input.value);
				break;
			case "fPassword":
				validInput = validPassword(input.value);
				break;
			default:
				break;
		}
		console.log(`input.id valid ='${validInput}'`);
		
		if(!validInput)
			input.classList.add("is-invalid");
		else
			input.classList.remove("is-invalid");

		validForm = validInput && validForm;
	});

	

	// Get the input fields
/* 	const fName = document.getElementById("fName");
	const fLastN = document.getElementById("fLastN");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorLastN = document.getElementById("errorLastN");
	const errorEmail = document.getElementById("errorEmail");  
	const errorPhone = document.getElementById("errorPhone");   */
	
	// Validate fields entered by the user: name, phone, password, and email
/*  	if(!validName(fName.value)) {
		validForm = false;
		fName.classList.add("is-invalid");
	}else{
		fName.classList.remove("is-invalid");
	} */

	
/* 	if(!validName(fLastN.value)){
		validForm = false;
		fLastN.classList.add("is-invalid");
	}
	else{
		fLastN.classList.remove("is-invalid");
	} */

/* 	if(!validLength(fAddress.value, 3)){
		validForm = false;
		fAddress.classList.add("is-invalid");
	}else{
		fAddress.classList.remove("is-invalid");
	} */

/* 
	if(!validPhone(fPhone.value)){
		validForm = false;
		fPhone.classList.add("is-invalid");
	}else{
		fPhone.classList.remove("is-invalid");
	} */

	//var form = document.getElementById("form");
	//form.classList.add("was-validated")
	//event.preventDefault()
	
	return validForm;
}

function validName(value){
	let valid = true;
	if (typeof value !== 'string') return false;

	//console.log(`value = '${value}'`);
	if(!validLength(value, 3)){
		//console.log(`length = '${value.length}'`);
		valid = false;
	}else if(containsNumber(value)){
		//console.log(`contains number = '${value}'`);
		valid = false;
	}
	return valid;
}

function validPhone(value){
	let valid = true;
	if (typeof value !== 'string') return false;

	//console.log(`validPhone value = '${value}'`);
	
	if (!validLength(value, 9, 9)){
		valid = false;
	}else if (!onlyNumbers(value)){
		valid = false;
	}
	return valid;
}

function validEmail(value){
	if (typeof value !== 'string') return false;

	if(!validLength(value, 3))
		return false;
	console.log(`Email len ok. ${value}`);
	if (!checkEmail(value))
		return false;	
	return true;
}

function validPassword(value){
	if (typeof value !== 'string') return false;
	if(!validLength(value, 3))
		return false;
	if(!checkPassword(value))
		return false;
	return true;
}

function validLength(value, min, max = 1000){
	let valid = true;
/* 	if (typeof value !== 'string') return false;
	
	const length = value.trim().length;

	console.log(`validLength: '${value}', length=${length}, min=${min}, max=${max}`);
	return length >= min && length <= max; */

	if (typeof value !== 'string') return false;

	//console.log(`validLength: ${value}, ${min}, ${max}`);
	if(!value){
		valid = false;
	} else if(value.length < min){
		valid = false;
	}else if(value.length > max){
		valid = false;
	}
	return valid;
}

const containsNumber = (value) => /\d/.test(value);

const onlyNumbers = (value) => /^\d+$/.test(value);

const checkEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const checkPassword = (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(value);
