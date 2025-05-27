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

	return validForm;
}

const validName = (value) => 
	(typeof value === 'string') &&
	validLength(value, 3) &&
	!containsNumber(value);

const validPhone = (value) => 
	(typeof value === 'string') &&
	validLength(value, 9, 9) &&
	onlyNumbers(value);

const validEmail = (value) =>
	(typeof value === 'string') &&
	validLength(value, 3) &&
	checkEmail(value);

const validPassword = (value) => 
	(typeof value === 'string') &&
	validLength(value, 3) &&
	checkPassword(value);

const validLength = (value, min, max = 1000) =>
	(typeof value === 'string') &&
	value.length >= min &&
	value.length <= max;

const containsNumber = (value) => /\d/.test(value);

const onlyNumbers = (value) => /^\d+$/.test(value);

const checkEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const checkPassword = (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(value);
