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
    let processedPlayerChoice = playerSelection.toLowerCase();
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
