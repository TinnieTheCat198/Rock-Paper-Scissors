function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3) +1;
    switch(computerChoice){
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
    // return null;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection)
        return "Tie!";
    let win;
    switch(playerSelection){
        case 'rock':
            win = (computerSelection === 'scissors');
            break;
        case 'paper':
            win = (computerSelection === 'rock');
            break;
        case 'scissors':
            win = (computerSelection === 'paper');
            break;
        default:
            return `Not exist ${playerSelection}`;
    }

    if (win)
        return `You win! (${playerSelection} beats ${computerSelection})`
        return `You lose! (${computerSelection} beats ${playerSelection})`
}

function roundResult(round, playerScore, computerScore){
    console.log(`Round ${round}: Player score: ${playerScore} - Computer score: ${computerScore}`);
}

function lastResult(playerScore, computerScore){
    if (playerScore > computerScore)
        console.log("RESULT: You win!")
    else if (playerScore < computerScore)
        console.log("RESULT: You lose!")
    else console.log("RESULT: Tie!");
}

function playGame(){
    let playerScore = 0
        , computerScore = 0;
    
    let round = 0;
    while(round != 5){
        ++round;    
        let playerChoice = prompt('Enter your choice?\nrock, paper, scissors');
        let resultRound = playRound(playerChoice.toLowerCase(), getComputerChoice());
        if (resultRound.includes("Tie"))
        {
            ++playerScore;
            ++computerScore;
            console.log(resultRound);
        }
        else if (resultRound.includes("win")){
            ++playerScore;
            console.log(resultRound);
        }
        else if (resultRound.includes("lose")){
            ++computerScore;
            console.log(resultRound);
        }
        else{
            alert(resultRound);
            --round;
        }

        roundResult(round, playerScore, computerScore);
    }

    lastResult(playerScore, computerScore);
}

playGame();