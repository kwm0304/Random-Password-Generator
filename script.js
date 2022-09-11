// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "}", "{", "~"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]

function generatePassword() {
    //1.Ask for password length, if outside 8-128 return to prompt
    passwordLength = prompt("Please select a password length between 8-128 characters.") 
    if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid response, please try again")
    return prompt("Please select a password length between 8-128 characters.")
    } 
    //2.Prompts log responses of arrays to include -> new array
    includeUpper = confirm("Would you like to include uppercase letters?")    
    includeLower = confirm("Would you like to include lowercase letters?")   
    includeSymbols = confirm("Would you like to include special characters?")  
    includeNumbers = confirm("Would you like to include numbers?") 
    //3.Validate that at least one criteria was selected
    if (!includeUpper, !includeLower, !includeSymbols, !includeNumbers) {
        alert("Please choose to include at least one type of character.")
        return generatePassword()
    }
    //4.Either gen. password from one combined array or get random character from each and push them
    var included = []

    if (includeUpper === true) {included.push(upperCase)}
    if (includeLower === true) {included.push(lowerCase)}
    if (includeSymbols === true) {included.push(specialCharacters)}
    if (includeNumbers === true) {included.push(numbers)}

    console.log("included " + [included])
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);