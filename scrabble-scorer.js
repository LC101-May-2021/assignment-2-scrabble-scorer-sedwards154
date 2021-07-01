// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += (`Score: '${word[i]}': ${pointValue}\n`)
		 }
    
	}
 }
	return letterPoints;
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function vowelBonusScore (word){
let score = 0
let vowels= ["A","E","I","O","U"]
word = word.toUpperCase()

  for (let i=0; i < word.length; i++) {
    
     if(vowels.includes(word[i])) {
       score+=3
     } else {
        score+=1
     } 
    
  }
  return score
}


function simpleScore(word) {
     let score =0
   for (let i=0; i < word.length;i++) {
     score +=1 
   }
return score; 
}

function initialPrompt() {
   console.log("Let's play some Scrabble!")
   let word = (input.question("Enter a word to score:"));
  console.log(scorerPrompt(word))
}

function scrabbleScore(word){
  let score = 0;
  for (let i=0; i < word.length;i++) {
    score += Number(newPointStructure[word[i]])
  };

  
  return score;
}

let scoringAlgorithms = [
{
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore,
},
{
  scoringFunction: vowelBonusScore,
  name: "Bonus Vowels ",
  description: "Vowels are 3 pts, consonants are 1 pt.",
},
{
  name: "Scrabble ",
  scoringFunction: scrabbleScore,
  description: "The traditional scoring algorithm." 
}
]

function scorerPrompt(word) {
  console.log("Which scoring algorithm would you like to use?\n")
  
  for (let i=0; i<scoringAlgorithms.length; i++) {

   console.log (`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }

  const num = input.question("Enter 0, 1, or 2:");
  console.log (`Score for  ${word}': ${scoringAlgorithms[num].scoringFunction(word)}`) 

  return (scoringAlgorithms[num])
  
}

function transform(ops) { // ops = oldPointStructure

  let nps = {};
  for (let key in ops) {
    for (let i = 0; i < ops[key].length; i++) {
      nps[ops[key][i].toLowerCase()] = key;
    }
  }
  return nps;
}


let newPointStructure = transform(oldPointStructure);


function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
}
