// Get references to DOM elements
const lengthInput = document.getElementById('length');
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');

// Define characters to include in password
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

// Generate a password and display it 
function generatePassword() {

  // Get password length from input
  const length = lengthInput.value;
  
  // Start with an empty password
  let password = '';

  // Loop length times
  for(let i=0; i<length; i++) {

    // Get a random character from the chars string
    const randomIndex = Math.floor(Math.random() * chars.length);
    const randomChar = chars.charAt(randomIndex);

    // Append to the password string
    password += randomChar;
  }

  // Display generated password
  passwordDisplay.innerText = password;

}

// Listen for click on generate button 
generateButton.addEventListener('click', generatePassword);