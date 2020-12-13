//console.log("Akshita");

//importing readline-sync (package) to be used 
const readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.bgCyan.bold.white("A JS Quiz App - by Akshita Saini"));

console.log("");

console.log("Hey, there!");
console.log("Do you think you know Javascript?");
console.log("Play to test!");
console.log("");

var userName = readlineSync.question("What's your name?");
console.log("");
console.log("Welcome " + chalk.bgCyan.bold.white(userName) + "!");

console.log("");

var yourScore = 0;

/*var ops  = ["Shows a warning","Prompts to complete the statement","Throws an error", "Ignores the statement"];

var question = "When interpreter encounters an empty statements, what it will do?";

var ind = readlineSync.keyInSelect(ops, chalk.bold.blackBright.bgWhite(question)); 

var answer = "Ignores the statement";
if(ops[ind]===answer)
  console.log("yes");
else 
  console.log("no");
*/


function play(question, answer, explanation)
{
  var userAnswer = readlineSync.question(chalk.bold.blackBright.bgWhite(question)); 
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.greenBright("Gg!"));
    yourScore++;
    console.log(chalk.cyan("Current Score: "+yourScore));
  }
  else 
  {
    console.log(chalk.redBright("Come on!"));
  }
  console.log("");
}

var questions = [
  {
    question:"Which type of JavaScript language is ___?\n a)Object-Oriented\n b)Object-Based\n c)Assembly-language\n d)High-level",
    explanation:"JavaScript is not a pure OOP's (object oriented programming) based languages such as PHP, java or many other languages, although it is an object-based language. It is not OOP's based language, because it doesn't have three basic properties of object-oriented programming languages, such as polymorphism, encapsulation, and inheritance.",
    answer:"b"
  },
  {
    question:"When interpreter encounters an empty statements, what it will do?\n a)Shows a warning\n b)Prompts to complete the statement\n c)Throws an error\n d)Ignores the statement",
    explanation:"In JS, when the interpreter encounters a empty statements it normally ignores or not response to that empty statement. The empty statements also sometimes very useful like we use the empty statements for creating loop for nothing.",
    answer:"d"
  },
  {
    question:"Which one of the following also known as Conditional Expression?\n a)Alternative to if-else\n b)Switch statement\n c)If-then-else statement\n d)immediate if",
    explanation:"A conditional expression can only evaluate two things, which either true or false, that are purely based on the evaluation of the condition",
    answer:"d"
  },
  {
    question:"The 'function' and 'var' are known as?\n a)Keywords\n b)Data types\n c)Declaration statement\n d)Prototypes",
    explanation:"The 'function' and 'var' both are the Declaration statements. These both are used for defining, and declaring variable, function in anywhere in the program.",
    answer:"c"
  },
  {
    question:"In the JavaScript, which one of the following is not considered as an error?\n a)Syntax error\n b)Missing of semicolons\n c)Division by zero\n d)Missing of Bracket",
    explanation:" Yes, you heard right that division of any integer by zero is not an error in the JavaScript. It just prints the infinity as a result. However, there is an exception in JavaScript, dividing zero with zero will not have any defined number/value so, the result of this specific operation is a special value Not a Number (or NaN) and printed as NaN.",
    answer:"c"
  }
]

for(var i=0;i<questions.length;i++)
{
   play(questions[i].question, questions[i].answer, questions[i].explanation);
}


console.log(chalk.bgRedBright.white("You scored: " + yourScore));

var scores = [
  {
    user:"Akshita",
    score:3
  },
  {
    user:"Papa",
    score:0
  }
]

var count=scores.length;
for(var i=0;i<scores.length;i++)
{
  if(yourScore>=scores[i].score){
    count--;
  }
}

console.log("");
if(count===0)
{
    console.log(chalk.bold.yellowBright("You did it!"));
    console.log(chalk.bold.yellowBright("You beat the high score!"));
}




