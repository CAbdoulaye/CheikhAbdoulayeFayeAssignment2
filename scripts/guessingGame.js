para.innerHTML = "Guess the Number <br>" 
let randNum = Math.floor(Math.random() * 10);
let number = Number(prompt("Enter a random number between 1 and 10: "));
while (number != randNum)
  number = Number(prompt("Wrong number! Try again: "));
para.innerHTML = number + " was the right number"