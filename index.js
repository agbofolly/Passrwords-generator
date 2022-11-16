const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let createBtn = document.getElementById("create-btn");
let randompassword1 = document.getElementById("randompassword1");
let randompassword2 = document.getElementById("randompassword2");

function getRandomCharacters() {
  let randomCharacters = Math.floor(Math.random() * characters.length)
    return characters[randomCharacters]
}
function generateRandomPassword(passwordLength) {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacters()
    }
     return randomPassword
}

function replacePasswords() {
  let passwordInputVal = document.getElementById("passwordLength").value;
  randompassword1.textContent = generateRandomPassword(passwordInputVal)
  randompassword2.textContent = generateRandomPassword(passwordInputVal)
}
