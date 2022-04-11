var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);

var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseChars = lowerCaseChars.map(lowerCaseChars => lowerCaseChars.toUpperCase());
var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

function getPasswordCritera(){
    var length = parseInt(prompt("Enter number of password characters, between 8-128."), 10);
    if(Number.isNaN(length)) {
        alert("Must enter a number for password length");
        return null;
    }
    
    if(length < 8 || length > 128){
        alert("Password length must be at least 8 and less than 129 characters");
        return null;
    }

    var hasSpecialChars = confirm(
        'Click Yes to include special characters.'
    );

    var hasNumericChars = confirm(
        'Click Yes to include numeric characters.'
    );

    var hasUpperChars = confirm(
        'Click Yes to include uppercase characters.'
    );

    var hasLowerChars = confirm(
        'Click Yes to include lowercase characters.'
    );
    
    if(
        hasLowerChars === false &&
        hasUpperChars === false &&
        hasSpecialChars === false &&
        hasNumericChars === false
    ) {
        alert("Must select atleast one character type");
        return null;
    }

    var passCritera = {
        length: length,
        hasNumericChars: hasNumericChars,
        hasUpperChars: hasUpperChars,
        hasLowerChars: hasLowerChars,
        hasSpecialChars: hasSpecialChars,
    };

    return passCritera;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

function generatePass() {
    var criteria = getPasswordCritera(); 
    var result = [];
    var possibleChars = [];
    var resultChars = [];

    if (!criteria) return null;

    if (criteria.hasSpecialChars) {
        possibleChars = possibleChars.concat(specialChars);
        resultChars.push(getRandom(specialChars));
      }

    if (criteria.hasNumericChars) {
        possibleChars = possibleChars.concat(numericChars);
        resultChars.push(getRandom(numericChars));
     }
     
    if (criteria.hasUpperChars) {
        possibleChars = possibleChars.concat(upperCaseChars);
        resultChars.push(getRandom(upperCaseChars));
    }

    if (criteria.hasLowerChars) {
        possibleChars = possibleChars.concat(lowerCaseChars);
        resultChars.push(getRandom(lowerCaseChars));
    }
    for(var i = 0; i < criteria.length; i++) {
        var possibleChar = getRandom(possibleChars);

        result.push(possibleChar);
        
    }

    for (var i = 0; i < resultChars.length; i++) {
        result[i] = resultChars[i];
    }

    return result.join('');
}