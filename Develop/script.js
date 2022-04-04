// Assignment code here

numbers: "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '\u005C' + '\u0022';

var generatePassword = function() {
    var password = "";
    var passwordLength = window.prompt("Your password can be 8 to 128 characters long. Please enter a number 8 to 128.");

    // for (i = 0; i < passwordLength; i++) {
    //     if (passwordLength >= 8 && passwordLength <= 128) {
    //         password += (Math.floor(Math.random() * 10))
    //     } else {
    //         window.alert("Not a valid input. Please enter a number between 8 and 128.");
    //         generatePassword();
    //     }
    // }
    
    if (passwordLength >= 8 && passwordLength <= 128) {
        var includeLwrCs = window.confirm("Would you like to include lowercase letters?");
        var includeUprCs = window.confirm("Would you like to include uppercase letters?");
        var includeNums = window.confirm("Would you like to include numbers?");
        var includeSpclCh = window.confirm("Would you like to include special characters?");

        if (includeLwrCs || includeUprCs || includeNums || includeSpclCh) {
            if (includeNums) {
                for (i = 0; i < passwordLength; i++) {
                    password += (Math.floor(Math.random() * 10))
                    console.log(password);
                    }
            }
        } else {
            window.alert("You must include at least one input of lowercase letters, uppercase letters, numbers, or special characters. Try again.");
            return false;
        }
    } else {
        window.alert("Not a valid input. Please enter a number between 8 and 128.");
        return false;
      }   
    return password;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (!password) {
      writePassword();
      return false;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
