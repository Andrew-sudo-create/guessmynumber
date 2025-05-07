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



document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
     console.log(guess);

     //When there is no input
     if(!guess){
        document.querySelector('.message').textContent = "No Number!"

        //When player wins
     }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.borderColor = '#60b347'

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }


        //When guess is too high
     }else if(guess > secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = 'Too High!'
            document.querySelector('.number').style.borderColor = 'red'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You Lost the Game!'
            document.querySelector('.score').textContent = 0
        }
        
        //When guess is too low
     }else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too Low!'
        document.querySelector('.number').style.borderColor = 'red'
        score--
        document.querySelector('.score').textContent = score
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low!'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You Lost the Game!'
            document.querySelector('.score').textContent = 0
        }
     }

     
})

document.querySelector('.again').addEventListener
('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 
    'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.borderColor = '#ffffff'
})