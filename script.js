const url = 'https://opentdb.com/api.php?amount=10';

let ca;
let correct;
let incorrect;

async function getTrivia() {
    const response = await fetch(url);
    const data = await response.json();

    let category = document.querySelector('.category');
    let question = document.querySelector('.question');
    let difficulty = document.querySelector('.difficulty');
    let correctAnswer = document.querySelector('.correctAnswer');
    let incorrectAnswers1 = document.querySelector('.incorrectAnswer1');
    let incorrectAnswers2 = document.querySelector('.incorrectAnswer2');
    let incorrectAnswers3 = document.querySelector('.incorrectAnswer3');

    difficulty.innerHTML = `<div>Difficulty: ${data.results[0].difficulty}</div>`;
    category.innerHTML = `<div>${data.results[0].category}</div>`;
    question.innerHTML = `<div>${data.results[0].question}</div>`;
    correctAnswer.innerHTML = `<div>${data.results[0].correct_answer}</div>`;
    incorrectAnswers1.innerHTML = `<div>${data.results[0].incorrect_answers[0]}</div>`;
    incorrectAnswers2.innerHTML = `<div>${data.results[0].incorrect_answers[1]}</div>`;
    incorrectAnswers3.innerHTML = `<div>${data.results[0].incorrect_answers[2]}</div>`;

    incorrect = data.results[0].incorrect_answers;
    ca = data.results[0].correct_answer;
    correct = ca.toString();

    let joinedArray = [];
    joinedArray.push(incorrect);
    
    console.log(incorrectAnswers2);
        // DISPLAYS NO OUTPUT WHEN TRUE OR FALSE
    // for(let i = 0; i < joinedArray.length; i++) {
        // console.log(joinedArray[i]);
        
        // if(incorrectAnswers2 === null) {
        //     incorrectAnswers2.remove()
        // }

        // if(incorrectAnswers3 === null) {
        //     incorrectAnswers3.textContent = ''
        // }
    // }
}
getTrivia();

    // Declare Display Message as a function for conveniency
    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    };

    // For Next Trivia
    const nextTrivia = document.querySelector('.again');
    function handleClick() {
        window.location.reload();
    }
    nextTrivia.addEventListener("click", handleClick);

    // Checking the Answer
    document.querySelector('.check').addEventListener('click', function () {
        let guess = document.querySelector('.guess').value;
        console.log(guess, typeof guess);

        if (guess.trim().length == 0) {
            displayMessage('⛔️ No Answer!')
        } else if (guess.toString() === correct || guess.toString() === correct.toLowerCase()){
            displayMessage('Correct! 🎉')
            document.querySelector('.guess').textContent = correct;
            document.querySelector('body').style.backgroundColor = '#60b347';   
        } else {
            displayMessage('Incorrect! Please Try again!')
        }
    });