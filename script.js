//console.log("average external script moment, amirite gamers?");

//global_vars:

let player_score = 0;
let computer_score = 0;

let playerSelection = "rock";
let computerSelection = "rock";

let i = 0 
let k = 0

function getComputerSelection(){
    let rand = Math.random()*100
    if (rand <= 33){computerSelection = "rock";}
    if (rand > 33 && rand <= 66) {computerSelection = "paper";}
    if (rand>66 && rand <= 100){computerSelection = "scissors";}
}


function playRound(playerSelection,computerSelection){
    p = playerSelection.charCodeAt(0);
    c = computerSelection.charCodeAt(0);

    k = p - c;

    if (k != 0){
        if(Math.abs(k) < 3){
            if(k>0){computer_score++;}
            else{player_score++;}
        }
        else{
            if(k>0){player_score++;}
            else{computer_score++;}
        }
        i++;
    }

    comp_p.textContent = "Computer: " + computer_score;
    play_p.textContent = "You: " + player_score;
}

function game(){
    
        getComputerSelection();
        playRound(playerSelection,computerSelection);
        comp_s.textContent = "Computer played: " + computerSelection;
        play_s.textContent = "You played: " + playerSelection;
        
    if (computer_score == 5){
        result.textContent = "Computer wins. :/";
        instr.textContent = "Click the buttons to reset and play a new match.";
        result.classList.remove('win');
        result.classList.remove('lose');
        result.classList.add('win');
        computer_score = 0;
        player_score = 0;
        
    }
    else if(player_score == 5){
        result.textContent = "Congratulations! You Win! :)";
        instr.textContent = "Click the buttons to reset and play a new match.";
        result.classList.remove('win');
        result.classList.remove('lose');
        result.classList.add('lose');
        computer_score = 0;
        player_score = 0;
    }
    else{result.textContent = "";instr.textContent = "";}

}

function getPlayerSelection(e){
    playerSelection = e.target.id;
    game();
}

function btn_hover(e){
    e.target.classList.add('hover');
}

function btn_hover_end(e){
    e.target.classList.remove('hover');
}


const btns = document.querySelectorAll('button')
btns.forEach(btn => btn.addEventListener('click', getPlayerSelection));
btns.forEach(btn => btn.addEventListener('mouseenter', btn_hover));
btns.forEach(btn => btn.addEventListener('mouseleave', btn_hover_end));







