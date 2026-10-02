let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// Random Choice of computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


// Logic for Draw
const drawGame = (userChoice) => {
    msg.innerText = `Draw! Both Selected ${userChoice}`;
    msg.style.backgroundColor = "blue";
}


//Logic for Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
};



// Logic for which choice beats which one
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    // Draw Condition
    if (userChoice === compChoice) {
        drawGame(userChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


//Logic for Starting Game
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 