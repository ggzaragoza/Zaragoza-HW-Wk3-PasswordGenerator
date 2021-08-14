// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function beginPassword() {

  // Asks user for and displays password length, will return alert if input is not a valid password length
  var askLength = prompt("Please choose the length of your new password by entering a number value between 8 and 128. Passwords can be 8-128 characters long.");

  if (askLength < 8 || askLength > 128 || askLength == " ") {
    alert ("Please enter a valid number of characters for your new password.");
    return beginPassword();
  } else { 
    alert ("Your new password will be " + askLength + " characters long.");
  }

  // Prompts asks user which character( set)s to include when generating password
  var askAlpha = confirm("Would you like to include lowercase characters in your new password?");
  var askUpper = confirm("Would you like to include uppercase characters in your new password?");
  var askNum = confirm("Would you like to include numeric characters in your new password?");
  var askSpecial = confirm("Would you like to include special characters (!, @, #, $, %, ^, &, _) in your new password?");

  // Users' choices above are stored here as true/false values
  var confirmedPwordCriteria = {
    askLength: askLength,
    askAlpha: askAlpha,
    askUpper: askUpper,
    askNum: askNum,
    askSpecial: askSpecial,
  }

  // Users will restart process if no character sets are selected
  if (askAlpha === false && askUpper === false && askNum === false && askSpecial === false) {
    alert("Please select at least one character set to be used for generating your new password.");
    return beginPassword();
  }

  return confirmedPwordCriteria;
  
}



// All available character( set)s are stored here
var alphaCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "_"];



// Based on users' preferences for password generation, chosen character sets will merge into one array thus containing all potential characters for users' passwords 
function generatePassword() {

  var initiate = beginPassword();
  var potentialCharacters = [];
  var characterChoices = [];
  var newPassword = [];

  if (initiate.askAlpha) {
    potentialCharacters = potentialCharacters.concat(alphaCharacters);
  }
  if (initiate.askUpper) {
    potentialCharacters = potentialCharacters.concat(upperCharacters);
  }
  if (initiate.askNum) {
    potentialCharacters = potentialCharacters.concat(numCharacters);
  }
  if (initiate.askSpecial) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
  }

  // Retrieves random character from newly merged array of potential characters
  function getCharacterFrom() {
    var randIdx = Math.floor(Math.random() * potentialCharacters.length);
    var result = potentialCharacters[randIdx];
    return result;
  }

  // Loop will iterate function to retrieve characters for password as necessary to satisfy password length based on users' inputs
  // Retrieved random characters are placed into new array
  for (var i = 0; i < initiate.askLength; i++) {
    var characterChoices = getCharacterFrom(potentialCharacters);
    newPassword.push(characterChoices);
    }
  
  // Joins random characters into final password
  return newPassword.join("");

}


// Retrieves newly formed string of random characters and places string into #password text area within HTML
function passwordGenerator() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);