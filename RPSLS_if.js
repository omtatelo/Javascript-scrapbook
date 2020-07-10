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

var user = 3;
var sheldon = 5;

var win = "It seems that you've wom this time.";
var lose = "Oh... I win";

function game(user, sheldon){
    if(user === sheldon) {
        console.log("Empate");
    
    //user picks rock 
    }else if( user === 1 && sheldon === 2) {
        console.log(lose);
    }else if( user == 1 && sheldon == 3){
        console.log(win);
    }else if( user == 1 && sheldon == 4){
        console.log(win);
    }else if( user == 1 && sheldon == 5){
        console.log(lose);
    
    
    //user picks paper
    }else if( user == 2 && sheldon == 1){
        console.log(win);
    }else if( user == 2 && sheldon == 3){
        console.log(lose);
    }else if( user == 2 && sheldon == 4){
        console.log(lose);
    }else if( user == 2 && sheldon == 5){
        console.log(win);
    
    //user picks scissors
    }else if( user == 3 && sheldon == 1){
        console.log(lose);
    }else if( user == 3 && sheldon == 2){
        console.log(win);
    }else if( user == 3 && sheldon == 4){
        console.log(win);
    }else if( user == 3 && sheldon == 5){
        console.log(lose);
    
    //user picks lizard
    }else if( user == 4 && sheldon == 1){
        console.log(lose);
    }else if( user == 4 && sheldon == 2){
        console.log(win);
    }else if( user == 4 && sheldon == 3){
        console.log(lose);
    }else if( user == 4 && sheldon == 5){
        console.log(win);
    
    //user picks Spock
    }else if( user == 5 && sheldon == 1){
        console.log(win);
    }else if( user == 5 && sheldon == 2){
        console.log(lose);
    }else if( user == 5 && sheldon == 3){
        console.log(win);
    }else if( user == 5 && sheldon == 4){
        console.log(lose);
    }else{
        console.log("I see, you are trying to avoid using valid answer. Spock would be asshamed of you.")
    }
}