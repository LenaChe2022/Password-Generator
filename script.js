// Assignment code here
// arrays with different types of characters
var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabetLower);

var alphabetUpperAll = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
console.log(alphabetUpperAll);
var alphabetUpper = alphabetUpperAll.split('');
console.log(alphabetUpper);

var numeric = '0123456789'.split('');
console.log(numeric);

var SpecialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
console.log(SpecialChar);

//array for the password
var firstArray = [];
console.log(firstArray);

function generatePassword(){
  var charNumber = prompt("Choose the lenght of the password from 8 to 128");
  if (charNumber < 8 || charNumber > 128){
    window.alert("Please choose a valid lenght of the password");
    generatePassword();
    } else{
    console.log(charNumber);
    if (window.confirm("Do you want to include lowercase characters in the password?")) {
      var charAll1 =firstArray.concat(alphabetLower);
      console.log(charAll1);
    } else{
      var charAll1 =firstArray;
      console.log(charAll1);
    };
    if (window.confirm("Do you want to include uppercase characters in the password?")) {
      var charAll2 = charAll1.concat(alphabetUpper);
      console.log(charAll2);
    } else{
      var charAll2 = charAll1;
      console.log(charAll2);
    };
    if (window.confirm("Do you want to include numeric characters in the password?")) {
      var charAll3 = charAll2.concat(numeric);
      console.log(charAll3);
    } else{
      var charAll3 = charAll2;
      console.log(charAll3);
    };
    if (window.confirm("Do you want to include special characters in the password?")) {
      var charAll4 = charAll3.concat(SpecialChar);
      console.log(charAll4);
    } else{
      var charAll4 = charAll3;
      console.log(charAll4);
    };
    if (charAll4.length===0){
      window.alert("To generate a password please choose at least one character type");
      generatePassword();
    } else {
      var word=('');
      for (let x = 0; x < charNumber; x++) {
        var index = Math.floor(Math.random() * charAll4.length);
        word =word + charAll4[index];
        console.log(word);
      };
     return word; 
    };
  }; 
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
