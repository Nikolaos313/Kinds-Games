let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".template-score");
const result_p = document.querySelector(".result>p");

const rock_div = document.getElementById("rock");
const hand_div = document.getElementById("papper");
const scissors_div = document.getElementById("scissor");


//create a function with name GetComputerChoices that return a random num index in array choices
function GetComputerChoices() {
    const choices = ["rock", "papper", "scissor"];
    const randomnumber = (Math.floor(Math.random() * 3))
    return choices[randomnumber];
};
function Win(a,b) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallworduser = "user".fontsize(3).sup();
    const smallwordcomp = "computer".fontsize(3).sup();
    const color = document.getElementById(a);
    color.classList.add("green-glow");
    setTimeout(function () { color.classList.remove("green-glow") }, 400);
    result_p.innerHTML = (a + smallworduser + " beats " + b + smallwordcomp + ".You Win");
}

function Lose(a, b) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallworduser = "user".fontsize(3).sup();
    const smallwordcomp = "computer".fontsize(3).sup();
    const color = document.getElementById(a);
    color.classList.add("red-glow");
    setTimeout(function () { color.classList.remove("red-glow") }, 400);
    result_p.innerHTML = (a + smallworduser + " loses " + b + smallwordcomp+ ".You Lost ");
}
function Draw(a,b) {
   
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallworduser = "user".fontsize(3).sup();
    const smallwordcomp = "computer".fontsize(3).sup();
    const color = document.getElementById(a);
    color.classList.add("grey-glow");
    setTimeout(function () { color.classList.remove("grey-glow") }, 400);
    result_p.innerHTML = (a + smallworduser + " equals " + b + smallwordcomp + ".It's a draw");
}

//function ConvertToWord(letter) {
//    if (letter === 'r') return "rock";
//    if (letter === 'p') return "papper";
//    return "scissor";
//}
//Create i function with name game that compare two variables
function Game(userchoice) {
    const computerChoices = GetComputerChoices();
    switch (userchoice + computerChoices) {
        case "rockscissor":
        case "scissorpaper":
        case "papperrock":
            //console.log("The User win")
            Win(userchoice, computerChoices);
            break;
        case "scissorrock":
        case "papperscissor":
        case "rockpaper":
            //console.log("The User Loses")
            Lose(userchoice, computerChoices);
            break;
        case "rockrock":
        case "scissorscissor":
        case "papperpaper":
            //console.log("The game is draw")
            Draw(userchoice, computerChoices);
            break;
    }

}

//Architecture Javascript input in mama function that i call main
function Main() {
    rock_div.addEventListener("click", function () {
        Game("rock")
    });
    hand_div.addEventListener("click", function () {
        Game("papper")
    });
    scissors_div.addEventListener("click", function () {
        Game("scissor")
    });
};
//invoke Main
Main();
