// Assignment Code
var generateBtn = document.querySelector("#generate");
const alpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*-_=+"; 
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;


 var randomPasswordGenerated = "";

 for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += functionArray[randomNumberPicked]();
 }

 //make sure characters are added to password
 randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
 randomPasswordGenerated += minimumUpperCases;
 randomPasswordGenerated += minimumSpecialCharacters;



 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 function writePassword() {
  document.getElementById("")

 }

 var functionArray = [
  function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },

  function getLowerCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },

  function getUpperCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 +65));
  },
  function getSpecialCharacters() {
    return getSpecialCharacters(Math.floor(Math.random() * getSpecialCharacters.length));
  }
 ];

 if (numbers === true) {
  minimumNumbers = functionArray[0];
  minimumCount++;

 }

 if (lowerCases === true) {
  minimumLowerCases = functionArray[1];
  miniimumCount++;

 }

 if (UpperCases === true) {
  minimumUpperCases = functionArray[2];
  minimumCount++;
 }

 if (special === true) {
  minimumSpecialCharacters = functionArray[3];
  minimumCount++;

 }
 return randomPasswordGenerated;
}
