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
    showPlayerChoice.textContent = playerSelection;
    showComputerChoice.textContent = computerSelection;
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

    let playerScore = 0
        , computerScore = 0;
    let playerChoice;
    let round = 0;

    if (computerScore === 5 || playerScore === 5){
        alert("Load the page if you want to play again");
    }

    let rockChoice = document.querySelector("#rock");
    let paperChoice = document.querySelector("#paper");
    let scissorsChoice = document.querySelector("#scissors");
    let showPlayerChoice = document.querySelector(".player-choice");
    let showComputerChoice = document.querySelector(".computer-choice");

    showPlayerChoice.textContent = "";
    showComputerChoice.textContent = "";

    rockChoice.addEventListener('click', () => {
        if (computerScore === 5 || playerScore === 5){
            alert("Load the page if you want to play again");
            lastResult(playerScore, computerScore);
            return;
        }
        ++round;
        let computerChoice = getComputerChoice();
        let resultRound = playRound('rock', computerChoice);

        if (resultRound.includes("win"))
            ++playerScore;
        else if (resultRound.includes("lose"))
            ++computerScore;
        console.log(resultRound);

        roundResult(round, playerScore, computerScore);
    });

    paperChoice.addEventListener('click', () => {
        if (computerScore === 5 || playerScore === 5){
            alert("Load the page if you want to play again");
            lastResult(playerScore, computerScore);
            return;
        }
        ++round;
        let computerChoice = getComputerChoice();
        let resultRound = playRound('paper', computerChoice);

        if (resultRound.includes("win"))
            ++playerScore;
        else if (resultRound.includes("lose"))
            ++computerScore;
        console.log(resultRound);

        roundResult(round, playerScore, computerScore);

        
    });

    scissorsChoice.addEventListener('click', () => {
        if (computerScore === 5 || playerScore === 5){
            alert("Load the page if you want to play again");
            lastResult(playerScore, computerScore);
            return;
        }
        ++round;
        let computerChoice = getComputerChoice();
        let resultRound = playRound('scissors', computerChoice);

        if (resultRound.includes("win"))
            ++playerScore;
        else if (resultRound.includes("lose"))
            ++computerScore;
        console.log(resultRound);

        roundResult(round, playerScore, computerScore);

        
    });

    


    