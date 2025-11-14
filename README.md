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
