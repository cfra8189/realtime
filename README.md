Used the code from the Chrome inspector.

created inputName = document.getElementById('name')

adding session storage

function saveForm() {
    sessionStorage.setItem("signup_name', nameInput.value);
}



sessionStorage.	
This tells JavaScript to interact with the temporary storage space for the current browser tab.

setItem()	
This is a command to save new data.

"signup_name"	
This is the key, a unique label given to the saved data (similar to a file name). This key is used later to retrieve the data.

nameInput.value	
This is the value, the text the user entered into the input box on the webpage.


====Console====
const nameInput = document.getElementById('name');
undefined
sessionStorage.setItem('signup_name', nameInput.value); 
undefined
sessionStorage.getItem('signup_name')
'cfra8189'

creating loadForm(){
    sessionStorage.getItem('signup_name');
}

added if statements to check if there's anything from the input and if there is, it will save the nameInput.value as savedName.

if (savedName) nameInput.value = savedName;

added event listeners to all input to save data and validation to the inputs

nameInput.addEventListener('input', saveForm)

if (!nameInput.validity.valid) {
    alert('Please enter a valid username.');
    nameInput.focus();
    return;
    }

Pass Validation

console.log('Form submitted successfully!')

alert(`Form submitted! Thank you, ${nameInput.value`})


Kept getting an error until I changed 

const myForm = document.getElementById("myForm"); 

to:

const signupForm = document.getElementById("signupForm"); 

and this

const formData = new FormData(myForm);

to:

const formData = new FormData(signupForm);

Things went left.....