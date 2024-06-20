const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Please, select a number!';
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct Number! ✔';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'The number is too high!';
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'The number is too low!';
    }
});