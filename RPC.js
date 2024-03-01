let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
score = {
wins: 0,
losses: 0,
ties: 0
};
}

// document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function rpc (player1) {
    let computer = Math.floor(Math.random() * 3);
    arr = ['rock', 'scissors', 'paper'];
    computer = arr[computer];

    let winningCase = {
        rock: 'paper',
        paper: 'scissors',
        scissors: 'rock'
    }

    let result ='';

    function annountText() {
        console.log(`Computer play ${computer}. You play ${player1}. ${result}
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }

    if (player1 === computer) {
        result ='Tie!';
        score.ties +=1;
        
    } else if (winningCase[player1] === computer) {
        result = 'You lose!';
        score.losses +=1;

    } else {
        result ='You wont!';
        score.wins +=1;
    }

    document.querySelector('.js-result').innerHTML = `${result}`

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    document.querySelector('.js-compare').innerHTML = `You <img src='image/${player1}-emoji.png' class='move-icon'> Computer <img src='image/${computer}-emoji.png' class='move-icon'>`;

    return result;
}