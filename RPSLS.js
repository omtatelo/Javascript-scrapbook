/* 
Rock, Paper, Scissors, Lizard, Spock.

Scissors cut paper,
paper covers rock,
rock crushes lizard,
lizard poisons Spock,
spock smashes scissors,
scissors decapitates lizard,
lizard eats paper,
paper disproves Spock,
Spock vaporizes rock,
and —as it always has— rock crushes scissors.
*/

var user = 3; //scissors
var sheldon = 5; //spock

var win = "It seems that you've won this time.";
var lose = "Oh... I win";
var empate = "We're even"

function game(user, sheldon){
    switch(user){
    //user picks rock 
    case 1:
        switch(sheldon){
            case 1:
                console.log(empate);
                break;
            case 2:
                console.log(lose);
                break;
            case 3:
                console.log(win);
                break;
            case 4:
                console.log(win);
                break;
            case 5:
                console.log(lose);
                break;
        }
        break;
    
    //user picks paper
    case 2:
        switch(sheldon){
            case 1:
                console.log(win);
                break;
            case 2:
                console.log(empate);
                break;
            case 3:
                console.log(lose);
                break;
            case 4:
                console.log(lose);
                break;
            case  5:
                console.log(win);
                break;
        }
        break;
    //user picks scissors
    case 3:
        switch(sheldon){
            case  1:
                console.log(lose);
                break;
            case 2:
                console.log(win);
                break;
            case 3:
                console.log(empate);
                break;
            case 4:
                console.log(win);
                break;
            case 5:
                console.log(lose);
                break;
        }
        break;
    
    //user picks lizard
    case 4:
        switch(sheldon){
            case 1:
                console.log(lose);
                break;
            case 2:
                console.log(win);
                break;
            case 3:
                console.log(lose);
                break;
            case 4:
                console.log(empate);
                break;
            case 5:
                console.log(win);
                break;
        }
        break;
    
    //user picks Spock
    case 5:
        switch(sheldon){
            case 1:
                console.log(win);
                break;
            case 2:
                console.log(lose);
                break;
            case 3:
                console.log(win);
                break;
            case 4:
                console.log(lose);
                break;
            case 5:
                console.log(empate);
                break;
        }
        break;
    
    default:
        console.log("I see, you are trying to avoid using valid answer. Spock would be asshamed of you.");
        break;
    }
}

game(user, sheldon);