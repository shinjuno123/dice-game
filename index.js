function throwDice(){
  return Math.floor(Math.random()*6) + 1;
}

function decideWinner(diceNumber1,diceNumber2){
  var headingText = '';
  if(diceNumber1 > diceNumber2){
    headingText = '<img src="images/flag.png"></img> Player 1 Wins!';
  }else if(diceNumber1 < diceNumber2){
    headingText = 'Player 2 Wins! <img src="images/flag.png"></img>';
  }else{
    headingText = 'Draw!';
  }

  return headingText;
}

var heading = document.querySelector('h1');
var dice1 = document.querySelector('.dice .img1');
var dice2 = document.querySelector('.dice .img2');


var randomNumber1 = throwDice();
var randomNumber2 = throwDice();

dice1.setAttribute('src',`images/dice${randomNumber1}.png`);
dice2.setAttribute('src',`images/dice${randomNumber2}.png`);
heading.innerHTML = decideWinner(randomNumber1,randomNumber2);
