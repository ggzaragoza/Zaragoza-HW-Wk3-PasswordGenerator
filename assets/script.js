// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {



  // Asks user for password length, will return alert if input is not a valid password length
  var askLength = parseInt(prompt("Please choose the length of your new password by entering a number value between 8 and 128. Passwords can be 8-128 characters long."), 10);

  var minPwordLength = 8;

  var validPasswordLength = [minPwordLength]
    for (var i = 0; i < 121; i++) {
      validPasswordLength.push(i + 8)
    }
  
  if (!validPasswordLength.includes(askLength)) {
    var needValidNum = confirm ("Please enter a valid number of characters for your new password.");
    } else {
    alert ("Your new password will be " + askLength + " characters long.");
    }

  console.log(askLength);

  if (needValidNum) {
    writePassword();
  }




  // choice interpreted as boolean
  var askAlpha = confirm("Would you like to include lowercase characters in your new password?");
  console.log(askAlpha);
  var askUpper = confirm("Would you like to include uppercase characters in your new password?");
  console.log(askUpper);
  var askNum = confirm("Would you like to include numeric characters in your new password?");
  console.log(askNum);
  var askSpecial = confirm("Would you like to include special characters in your new password?");
  console.log(askSpecial);

  var confirmedPwordCriteria = {
    askLength: askLength,
    askAlpha: askAlpha,
    askUpper: askUpper,
    askNum: askNum,
    askSpecial: askSpecial,
  }

  if (askAlpha === false && askUpper === false && askNum === false && askSpecial === false) {
    alert("Please select at least one character set to be used for generating your new password.");
    return writePassword();
  }

  return confirmedPwordCriteria;

}



var alphaCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "%", "&", "@", "$", "_"];



function getCharacterFrom(characterSet) {
  var randomCharacter = Math.floor(Math.random() * characterSet.length);
  var result = characterSet[randomCharacter];
  return result;
}



function generatePassword() {
  var initWrite = writePassword();
  var potentialCharacterSets = [];
  var chosenCharacters = [];
  var newPassword = [];

  if (initWrite.askAlpha) {
    potentialCharacterSets = potentialCharacterSets.concat(alphaCharacters);
    chosenCharacters.push(getCharacterFrom(alphaCharacters));
  }
  if (initWrite.askUpper) {
    potentialCharacterSets = potentialCharacterSets.concat(upperCharacters);
    chosenCharacters.push(getCharacterFrom(upperCharacters));
  }
  if (initWrite.askNum) {
    potentialCharacterSets = potentialCharacterSets.concat(numCharacters);
    chosenCharacters.push(getCharacterFrom(numCharacters));
  }
  if (initWrite.askSpecial) {
    potentialCharacterSets = potentialCharacterSets.concat(specialCharacters);
    chosenCharacters.push(getCharacterFrom(specialCharacters));
  }

  for (var i = 0; i < initWrite.askLength; i++) {
    var characterChoices = getCharacterFrom(potentialCharacterSets);
    newPassword.push(characterChoices);
    }

  for (var i = 0; i < chosenCharacters.length; i++) {
    newPassword[i] = chosenCharacters[i];
    }
  
  return newPassword.join("");
}




function passwordGenerator() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);







// function randomCharacterSelection() {

//   var alphaChoice = function() {
//     return alphaCharacters[Math.floor(Math.random() * 26)];
//   }
//   console.log(alphaChoice());
//   var upperChoice = function() {
//     return upperCharacters[Math.floor(Math.random() * 26)];
//   }
//   console.log(upperChoice());
//   var numChoice = function() {
//     return numCharacters[Math.floor(Math.random() * 10)];
//   }
//   console.log(numChoice());
//   var specialChoice = function() {
//     return specialCharacters[Math.floor(Math.random() * 7)];
//   }
//   console.log(specialChoice());

// } 





