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
    //console.log("computer entered:" + computerSelection);
    
}

function getPlayerSelection(){
    playerSelection = window.prompt("Enter a valid input ('rock','paper', or 'scissors' case-insensitive):");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" ){getPlayerSelection();}
    //console.log("player entered:" + playerSelection);

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

    //console.log(p,c,k);
}

function game(){
    


    while(i<5){
        getComputerSelection();
        getPlayerSelection();    
        playRound(playerSelection,computerSelection);
        if (k!=0){
            console.log("Results of Round: "+i+"\n\nComputer: "+computer_score+"\nPlayer: "+player_score+
            "\n\nComputer Entered: "+computerSelection+"\nPlayer entered: "+playerSelection);

            window.alert("Results of Round: "+i+"\n\nComputer: "+computer_score+"\nPlayer: "+player_score+
            "\n\nComputer Entered: "+computerSelection+"\nPlayer entered: "+playerSelection);
        }
        else{
            console.log("This round was a tie.");
            window.alert("This round was a tie.");
        }
    }


    if (computer_score == player_score){
        console.log("This game was a tie.");
        window.alert("This game was a tie.");
    }
    else if (computer_score > player_score){
        console.log("Computer wins. :/");
        window.alert("Computer wins. :/");
    }
    else{
        console.log("Congratulations! \nYou Win! :)");
        window.alert("Congratulations! \nYou Win! :)");
    }

}


game();







