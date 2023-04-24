// // чтобы посмотреть значение input используют value, вместо textContent
// document.querySelector('.number-input').value = 13;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;


function displayGuessMessage(massage) {
    document.querySelector('.guess-message').textContent = massage;
}


document.querySelector('.check').addEventListener('click', function() {
    const quessingNumber = Number(document.querySelector('.number-input').value);
    console.log(quessingNumber, typeof quessingNumber)
// no input
    if(!quessingNumber) {
        // document.querySelector('.guess-message').textContent = 'Введите число!';
        displayGuessMessage('Введите число!');
// игрок выиграл

    } else if(quessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = '!!! ПРАВИЛЬНО !!!'
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem'

        forBasta.remove()
        document.querySelector('.wrapper__win').style.display = 'block'

        if(score > hightscore) {
            hightscore = score;
            document.querySelector('.highscore').textContent = hightscore
        }


// to hight
    } else if (quessingNumber !== secretNumber) {
        document.querySelector('.guess-message').textContent = quessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
        displayGuessMessage(quessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!')
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.guess-message').textContent = 'Game Over!';
        displayGuessMessage('Game Over!')
        document.querySelector('.score').textContent = 0;
    
    
    
    // else if(quessingNumber > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.guess-message').textContent = 'Слишком много!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = 'Game Over!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     // to low
    // } else if(quessingNumber < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.guess-message').textContent = 'Слишком мало!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.guess-message').textContent = 'Game Over!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    }
});


// кнопка сначала
document.querySelector('.again').addEventListener('click', function() {
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20

    // document.querySelector('.guess-message').textContent = 'Начни угадывать';
    displayGuessMessage('Начни угадывать')
    document.querySelector('.score').textContent = 20;
    document.querySelector('.question').textContent = '???';
    document.querySelector('.number-input').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
})