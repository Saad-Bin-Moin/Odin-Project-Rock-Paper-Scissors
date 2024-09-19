//  document.getElementById('id').innerHTML='Hello World' ;


// const num = Math.floor(Math.random()*3);
// console.log(num);



//Main code

let humanScore =0;
let computerScore=0;

let round = parseInt(prompt('How many round do you want to play?'));

for (let i=0; i<round; i++)

{
function getComputerChoice() {

 
    let returnString =Math.floor(Math.random()*3);

    if(returnString===0) {returnString='rock'}
    else if(returnString===1) {returnString='paper'}
    else {returnString='scissors'}

    return returnString;
}
const computerChoice = getComputerChoice();


// console.log(computerChoice);


function getHumanChoice() {
    let enterString = prompt("Enter your choice from 'Rock', 'Paper', 'Scissors'");

 let humanChoice = enterString.toLowerCase();

 return humanChoice;
}
let humanChoice = getHumanChoice();

//condition


if(humanChoice==='rock' && computerChoice ==='paper' || humanChoice ==='paper' && computerChoice ==='scissors' || humanChoice==='scissors' && computerChoice ==='rock') 
    {

computerScore++;

}

else if(humanChoice==='rock' && computerChoice ==='scissors'|| humanChoice==='paper' && computerChoice ==='rock' || humanChoice==='scissors' && computerChoice ==='paper') {

    humanScore++;

}

else  {

        console.log('Tie! No Update');
        

}

console.log(`Human : ${humanScore}  Vs Computer : ${computerScore}`);

}

console.log(`Final Score is - Human : ${humanScore}  Vs Computer : ${computerScore}`);

