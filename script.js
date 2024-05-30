/*Your game will be played against the computer. 
You will write a function that randomly returns “rock”, “paper” or “scissors”.*/

/*Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. 
Think about how you can use this to conditionally return one of the multiple choices.*/

function getComputerChoice(){
    let choice=Math.floor(Math.random()*100);
    //console.log(choice);
    if (choice<33){
        console.log("Computer: Rock");
    }
    else if (choice<66){
        console.log("Computer: Paper");
    }
    else{
        console.log("Computer: Scissors");
    }
    return choice;
}


/*Your game will be played by a human player. You will write a function that takes the user choice and returns it.
Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
Test what your function returns by using console.log.*/
function input(){
    let output=parseInt(prompt("Press 0 to play Rock \nPress 1 to play Paper \nPress 2 to play Scissors"));
    if (output <0 ||output>2){
        alert("Please choose a correct number");
        input();
    }
    return output;
}

function getHumanChoice(){
    let choices=input();
    if(choices==0){
        console.log("Human: Rock");
    }
    else if (choices==1){
        console.log("Human: Paper");
    }
    else if (choices==2){
        console.log("Human: Scissors");
    }
    else{console.log("Please choose a correct number");}
    return choices;
}

/*Your game will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0. */
humanScore=0;
computerScore=0;
/*Your game will be played round by round. 
You will write a function that takes the human and computer player choices as arguments, plays a single round, 
increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner. */

function playRound(humanChoice,computerChoice){
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    console.log(humanChoice);
    //Piedra vs Piedra
    if (humanChoice==0 &&computerChoice<33){
        console.log("Tie, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    }
    //Piedra vs papel
    else if (humanChoice==0 &&computerChoice<66) {
        computerScore++;
        console.log("You lose, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    } 
    //Piedra vs tijeras  
    else if (humanChoice==0 &&computerChoice>65) {
        humanScore++;
        console.log("You win, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    } 
    //Papel vs piedra
    else if (humanChoice==1 &&computerChoice<33){
        humanScore++;
        console.log("You win, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    }
    //Papel vs papel
    else if (humanChoice==1 &&computerChoice<66) {
        console.log("Tie, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    } 
    //Papel vs tijeras  
    else if (humanChoice==1 &&computerChoice>65) {
        computerScore++;
        console.log("You lose, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    } 
    //Tijeras vs piedra
    else if (humanChoice==2 &&computerChoice<33){
        computerScore++;
        console.log("You lose, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    }
    //Tijeras vs papel
    else if (humanChoice==2 &&computerChoice<66) {
        humanScore++;
        console.log("You win, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    }   
    //Tijeras vs tijeras
    else if (humanChoice==2 &&computerChoice>65) {
        console.log("Tie, your score is: "+humanScore+"\nComputer's score is: "+computerScore);
    } 
    
}

function playGame(){
    for (let i=1;i<=5;i++){
        playRound();
    }
}

playGame();