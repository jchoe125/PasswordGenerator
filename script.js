function generatePassword() {
    //PW character arrays
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var allCombo = [];
    var finalPassword = "";

    var confirmLength = prompt("Choose your password length. Must be between 8-128 characters");
    
    //Include loop function if character input is outside required bounds
    if (confirmLength <8 || confirmLength >128) {
        return alert("Error: Password must be between 8-128 characters. Please try again.");
    } else {
        //Continues to other prompts once PW length is answered correctly
        var confirmSpecial = confirm("Do you want to include special characters? If YES, click OK");
        var confirmUpper = confirm("Do you want to include uppercase letters? If YES, click OK");
        var confirmLower = confirm("Do you want to include lowercase letters? If YES, click OK");
        var confirmNumber = confirm("Do you want to include numbers? If YES, click OK");
    }
    //Outputs error message if user selects null for all PW parameters
    if (!confirmSpecial && !confirmUpper && !confirmLower && !confirmNumber) {
        return alert("Error: You must select YES for at least one criteria")
    //Outputs PW containing combination of parameters if user selects OK for all prompts
    }
    if (confirmUpper) {
        allCombo = allCombo.concat(alphaUpper);
    }
    if (confirmNumber) {
        allCombo = allCombo.concat(number);
    }
    if (confirmSpecial) {
        allCombo = allCombo.concat(specialChar);
    }
    if (confirmLower) {
        allCombo = allCombo.concat(alphaLower);
    }
    for (let i = 0; i < confirmLength; i++) {
        var randomIndex = Math.floor(Math.random() * allCombo.length);
        var randomChar = allCombo[randomIndex];
        finalPassword = finalPassword + randomChar;
    }
    return finalPassword;
}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
