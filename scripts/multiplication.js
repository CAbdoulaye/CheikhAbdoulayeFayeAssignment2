para.innerHTML = "Multiplication Table <br>";
let number = Number(prompt("Enter a number for multiplication table: "));
for (let i = 1; i < 11; i++){
  para.innerHTML += number + " x " + i + " = " + (number * i) + "<br>"
}