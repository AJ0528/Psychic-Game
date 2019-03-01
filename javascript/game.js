

alert("you have 10 guesses");

var Letters = ["a", "b", "c", "d", "e"];
var Guesesleft = 10;
var wins = 0;
var losses=0;
var userInput=0;
documemt.onkeyup = function(event){
var userInput = event.key;

var randonLetter =[Math.floor(Math.random() *Letters.length)];}
var userInput= prompt ("please pick a letter" + Letters); 

if (userInput != Letters){
counter -= 1;
if (counter > Guesesleft){
   document.write("no more tries left");
   break
   }

   if (userInput === randonLetter) {
       document.write("Congrats you have the correct letter!"+ wins);
       document.write("The random letter was" + randonLetter);
       document.write("you took" + Guesesleft );
   }
   console.log(Letters);
}