const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("pass-one-el")
let passTwoEl = document.getElementById("pass-two-el")
let passwordOne = ""
let passwordTwo = ""

// Create function onclick for button that generates 2 passwords and stores them in 2 variables

function generatePassword() {
    passwordOne = ""
    passwordTwo = ""
    for (i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomNumber]
    }
    
    for (i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomNumber]
    }
    
    passOneEl.textContent = passwordOne
    passTwoEl.textContent = passwordTwo
}

// Create a function that randomizes 15 characters
