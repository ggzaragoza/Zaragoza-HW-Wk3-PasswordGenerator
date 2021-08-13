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


  var alphaCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "#", "%", "&", "@", "$", "_"];
  

  function getAlpha() {
    return alphaChoice = alphaCharacters[Math.floor(Math.random() * 26)];
  }
  console.log(getAlpha());

  function getUpper() {
    return upperChoice = upperCharacters[Math.floor(Math.random() * 26)];
  }
  console.log(getUpper());

  function getNum() {
    return numChoice = numCharacters[Math.floor(Math.random() * 10)];
  }
  console.log(getNum());

  function getSpecial() {
    return specialChoice = specialCharacters[Math.floor(Math.random() * 7)];
  }
  console.log(getSpecial());


  function getCharacter() {
    if (!askAlpha) {
      return upperChoice || numChoice || specialChoice;
    } else if (!askAlpha || !askUpper) {
      return numChoice || specialChoice;
    } else if (!askAlpha && !askUpper && !askNum) {
      return specialChoice;
    } else if (!askAlpha && !askUpper && !askNum && !askSpecial) {
      alert("Please select at least one character type for your password.");
      return askAlpha;
    }
  }
  console.log(getCharacter());











  //IGNORE THIS
  const allowedPwordFunctions = {
    lowercase: askAlpha,
    uppercase: askUpper,
    numbers: askNum,
    specials: askSpecial
  }





  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
