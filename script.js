import { createTextBox } from "./dom.js";





let wordArray = ["apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "pear",
  "peach",
  "plum",
  "melon"]



// let winCount = 0;
// let count = 0;


//get a random word for game
var randomNumber = Math.floor(Math.random()* wordArray.length);
let chosenWord = wordArray[randomNumber]
console.log(chosenWord)

//split word into letters array 

let charArray = chosenWord.split("")
console.log(charArray)

//replace number of letters in chosenWord with underscores

let obfuscate = [...charArray]
for (let i = 0; i < obfuscate.length; i++) {
    const unscr = "_"
    obfuscate[i] = unscr  
}

console.log(obfuscate)

//making the keycaps listen
const keyCaps = document.querySelectorAll(".gameContainer__gallowsContainer_typewriter_keysRow_keyCap") 
keyCaps.forEach(keycap => {
  keycap.addEventListener('click', function handleClick(event) {
    console.log('key clicked', event);
    keycap.setAttribute('style', 'background-color: darkred;')
  })
})

//getting Start button to interact
const startButt = document.getElementById('startButt')
const gallowsCont = document.getElementById('gallowsCont')

// const startGame = () => {
//receive the click input
    
    startButt.addEventListener('click',(e) => {
        e.preventDefault
        console.log(e);
        console.log('clicked - launch new game');
//create / display the wordbox with the obfuscate array
        createTextBox("div", obfuscate, gallowsCont, ["wordBox"])

//receive click inputs from user, display on screen in "guess bin"

//run the input through check if its in the char array

//if in char array, replace obfuscate _ with character from chararray

//if not in char array, display the click input on screen in guess bin
// (modified appearance)
// iterate through the image array

})

// }
// console.log(startGame)
// const startButtClicked = () => {
//     document.getElementById('startButt').addEventListener('click',(e) => {
//     console.log(e);
//     console.log('clicked - launch new game')
// });
// // }    
// // //wordbox to be hidden until game is launched

// const wordBox = document.getElementById("wordbox");
// console.log(wordBox)

// const startButtClicked = document.getElementById('startButt');
// console.log(startButtClicked)


// const showWordBox = () => {
//     if (wordBox.classList.contains("hidden")) {
//     wordBox.classList.add("wordBox")
//     }
//     document.getElementsById("wordbox").classList.add("wordBox");
//     }
// document.getElementsByClassName('startButt').addEventListener('click', showWordBox)

//PROBLEM MAY BE THAT AT 37 I CALL BUTTON WITH QUERRYSELECTOR FOR THE START
//BUT THEN AT 58 I CALL IT BY CLASSNAME STARTBUTT

//need to block keycap buttons after selected
// const blocker = () => {

// }

// //new game loader
// const initializer = () => {
//     winCount = 0;
//     count = 0;
// }

// //player button click
// button.addEventListener("click") => {
//     let charArray = chosenWord.split("");
//     let dashes 

//     if (charArray.includes (keyCap.innerText))
// }

// const gameContainer = document.getElementsByClassName("gameContainer")
// console.log(gameContainer)

// const wordBox = document.getElementsByClassName("wordBox")
