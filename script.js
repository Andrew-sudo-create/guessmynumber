'use strict';

// document.querySelector('.message')

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;

// ;

// document.querySelector('.guess').value = 23

// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
     console.log(guess);

     //When there is no input
     if(!guess){
        
        displayMessage('No Number!')

        //When player wins
     }else if(guess === secretNumber){
        displayMessage('Correct Number!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.borderColor = '#60b347'

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }


        //When Guess is wrong
     }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess> secretNumber ? 'Too High!' : 'Too Low!')
            document.querySelector('.number').style.borderColor = 'red'
            score--
            document.querySelector('.score').textContent = score
        }else{
            displayMessage('You Lost the Game!')
            document.querySelector('.score').textContent = 0
        }
    
    }

})

document.querySelector('.again').addEventListener
('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.borderColor = '#ffffff'
})