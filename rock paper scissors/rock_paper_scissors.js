var compare = function(choice1, choice2){
    if (choice1 == choice2){
        return "The result is a tie!";
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    else if(choice1 === "scissors"){
        if(choice2 === "paper"){
            return "scissors wins";
        }
        else{
            return "rock wins";
        }
    }
};

var runGame = function(){
    var userChoice = prompt("Do you choose rock, paper or scissors?");

    if(userChoice != "rock" && userChoice != "scissors" && userChoice != "paper")
    {
        document.body.innerHTML = "U dumbass! that ain't an option!";
    }
    else{
        var computerChoice = Math.random();
        if (computerChoice <= 0.33) {
        	computerChoice = "rock";
        } else if(computerChoice <= 0.66) {
        	computerChoice = "paper";
        } else {
        	computerChoice = "scissors";
        }
        document.body.innerHTML = "Computer: " + computerChoice;
        document.body.innerHTML = document.body.innerHTML + "<br><h1>" + compare(userChoice, computerChoice) + "!!</h1>";
    }
}