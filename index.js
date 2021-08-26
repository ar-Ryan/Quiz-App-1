var readlineSync = require('readline-sync');
var username = readlineSync.question(" Tell me your name : ");
var score = 0;
console.log(`Welcome ${username}, let's see how much you know about Aryan`)

function QandA(question,answer){

 var userAns = readlineSync.question(question);

 if(userAns.toLowerCase() === answer.toLowerCase()){
   console.log("That's Correct!")
   score+=2 ;
   console.log(` Your current score: ${score} `)
   console.log("-----------")
 } else {
   console.log(" Oh no that's wrong ")
   score-=1 ;
   console.log(`The answer is: ${answer}`)
   console.log(` Your current score: ${score} `)
   console.log("-----------")
 }
}
 console.log(` Your score is: ${score} `)
  console.log("-------------")


var questions = [{
  question : " Do i like to Dance ",
  answer : "No"
}, {
  question : " what's my favourite sport? ",
  answer : "volleyball"
},{
  question : " what's my favourite snack ? ",
  answer : "Burger"
}
];

for(i=0; i < questions.length; i++){
  var currentQuestion = questions[i];
  QandA(currentQuestion.question,currentQuestion.answer)
};

var mcqs = [
  {
   array : ["CSGO","Valorant","brawlhalla","Fortnite"],
  question : " What's my favourte videogame ",
  answer : "CSGO"
}, {
  array : ["1","4","0","2"],
  question : " how many times have I failed in a subject",
  answer : "1"
}
];

function MCQ(question,array,answer){
  var userans = readlineSync.keyInSelect(array,question);
  console.log('\n')
  if(array[userans] === answer){
    console.log("You are right !!");
    score+=2 ;
    console.log(` Your current score: ${score} `)
    console.log("-----------")
  }else{
    console.log(" Oh no that's wrong ")
    console.log(`The answer is: ${answer}`)
    score-=1 ;
    console.log(` Your current score: ${score} `)
    console.log("-----------")
  }
};

for(i=0;i<mcqs.length;i++){
currques = mcqs[i]
MCQ(currques.question,currques.array,currques.answer)
}

if(score>5){
  console.log(`Your final score: ${score}`)
  console.log("woohoo! You know me well")
}else{
  console.log(`Your final score: ${score}`)
  console.log("you don't know me that well let's hang out ;>")
}