const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate")
const field1 = document.getElementById("field-1")
const field2 = document.getElementById("field-2")
const passwordLen = document.getElementById("password-len")

var passwordLength = 16
var random1 = ""
var random2 = ""

generateBtn.addEventListener('click', function() {
  if (passwordLen.value === "") {
    passwordLength = 16
    } else {
    passwordLength = passwordLen.value
  }
    
  for(let i = 0; i <= passwordLength-1; i++) {
    var random = Math.floor(Math.random() * characters.length)
    random1 += characters[random]
    field1.textContent = random1      
  }       
  for(let i = 0; i <= passwordLength - 1; i++) {
    var random = Math.floor(Math.random() * characters.length)
    random2 += characters[random]
    field2.textContent = random2
  }      
  random1 = ""
  random2 = ""
})



