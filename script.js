function computerPlay(){
    let str=["Rock","Paper", "Scissors"]
    let index=Math.floor(Math.random() * str.length);

    return str[index];
}


function playRound(playerSelection, computerSelection) {
    // your code here!
        let res;
        if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"){
          res =  `You Win! ${playerSelection} beats ${computerSelection}!`;
          playerScore++;
        }
        else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors"){
          res =  `You Lose! ${computerSelection} beats ${playerSelection}!`;
          computerScore++;
        }
        else{
          res =  "It's a tie!";
        }
        
        res+=`\n Player score: ${playerScore}, Computer score: ${computerScore}`  
          
        if (playerScore==5 || computerScore==5){
          res += playerScore==5?"\n Player wins the game!!":"\n Computer wins the game!!";
          playerScore=0;
          computerScore=0;
          return res;
        }

        return res;
  }



function play(text){
        
    // for(let val=0; val<5;val++){
        // console.log("Enter choice:");
             
        const playerSelection = text.toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        const div = document.querySelector("div")
       
            div.innerText = `Computer chose: ${computerSelection} \n Player chose:${playerSelection} \n ${playRound(playerSelection, computerSelection)}`;
       
        // console.log(computerSelection);
        // console.log("User:"+playerSelection);
        // console.log(playRound(playerSelection, computerSelection));
    }
  // } 


  const buttons = document.querySelectorAll("button");
  // buttons.forEach(button => button.addEventListener("click", play));

  
  buttons.forEach(button => button.addEventListener("click", function (){

      play(button.innerText)

  }

  ));

let playerScore=0, computerScore=0;