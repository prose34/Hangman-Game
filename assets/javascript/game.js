// compare letter in array
// if it matches fill it in new array with blank spaces for word
// if it doesn't match fill it into guessed letter array/place

// .push? append, 


// display # of times user guessed word correctly

// have letters appear and uncover as they are guessed correctly

// display number of guesses remaining
// display letters already guessed
// reset game after user wins or loses

// does tolowercase matter at all?


var winCount = 0;
let avengers = ["Hawkeye", "Ironman", "Hulk", "Thor", "Captain America", "Thanos", "Vision"];

// is there a way to do this?:
// let userGuess = document.onkeyup(key);
// console.log(userGuess);

let randomWord = avengers[Math.floor(Math.random()*avengers.length)];



console.log(randomWord);
console.log(avengers[0][0]);

for (i = 0; i < avengers.length; i++) {
    console.log(avengers[i]);
}


// if ()


document.onkeyup = function(event) {

    let userGuess = event.key;

    // wins: 


    for ( i = 0; i < 11; i++) {
        document.getElementById("lettersGuessed").textContent = userGuess;
        this.appendChild
    }


    console.log(userGuess);
}

console.log(avengers);

























