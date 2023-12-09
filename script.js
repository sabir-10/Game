let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomId = Math.floor(Math.random() * 3);
    console.log(randomId);
    return options[randomId];
};
const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again";
    msg.style.backgroundColor = "blue";
};
const playGame = (userChoice) => {

    const compChoice = genCompChoice();
    if(userChoice == compChoice){
        drawGame();
    }

    else{

        let userWin = true;

        if(userChoice == "rock"){
            userWin = compChoice === "paper"?false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice === "scissors" ?false : true;
        }
        else{
            userWin = compChoice === "rock" ?false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "lightgreen";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer wins ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "lightcoral";
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});