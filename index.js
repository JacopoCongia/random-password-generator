const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
    ";","<",">",".","?","/"
];

const passOneEl = document.getElementById("pass-one-el");
const passTwoEl = document.getElementById("pass-two-el");
const btnEl = document.getElementById("btn-el");

let passwordOne = "";
let passwordTwo = "";

btnEl.addEventListener("click", function() {
    passwordOne = "";
    passwordTwo = "";
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomNumber]
    }
    
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomNumber]
    }
    
    passOneEl.textContent = passwordOne;
    passTwoEl.textContent = passwordTwo;
})