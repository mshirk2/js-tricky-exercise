function guessingGame() {
    const answer = (Math.floor(Math.random() * 100));
    let guessCount = 0;
    let finished = false;

    return (function guess(guessedNum){
        if (finished) return "The game is over, you already won!"
        guessCount++
        if (answer > guessedNum) return `${guessedNum} is too low!`
        if (answer < guessedNum) return `${guessedNum} is too high!`

        if (answer === guessedNum){
            finished = true;
            return `You win! You found ${answer} in ${guessCount} guesses.`
        }
    })
}

module.exports = { guessingGame };
