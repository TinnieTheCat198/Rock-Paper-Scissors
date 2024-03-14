function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3) +1;
    switch(computerChoice){
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
    return null;
}

function playRound(playerSelection, computerSelection){
    let processedPlayerChoice = String(playerSelection).toLowerCase();
    if (processedPlayerChoice === computerSelection)
        return "Tie!";
    let win;
    switch(processedPlayerChoice){
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
            return `Not exist ${processedPlayerChoice}`;
    }

    if (win)
        return `You win! (${processedPlayerChoice} beats ${computerSelection})`
        return `You lose! (${computerSelection} beats ${processedPlayerChoice})`
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
    let playerChoice;
    let round = 0;
    while(round != 6){
        ++round;    
        playerChoice = prompt('Enter your choice?\nrock, paper, scissors');
        let resultRound = playRound(playerChoice, getComputerChoice);
        if (resultRound.includes("Tie"))
        {
            ++playerScore;
            ++computerScore;
        }
        else if (resultRound.includes("win"))
            ++playerScore;
        else if (resultRound.includes("lose"))
            ++computerScore;
        else{
            alert(resultRound);
            --round;
        }

        roundResult(round, playerScore, computerScore);
    }

    lastResult(playerScore, computerScore);
}

playGame();