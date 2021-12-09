var readlineSync=require('readline-sync');
console.log("Welcome to the C++ Language Quiz")
console.log("---------------")
console.log("Each right answer will give you a +1")
console.log("Answer with a,b,c,d ");
var userName=readlineSync.question("Enter your name: ");
var score=0;
function quiz(question,answer){
   var userAnswer=readlineSync.question(question)
   if(userAnswer===answer){
     console.log("The answer is right")
     score++;
   }
   else{
     console.log("The answer is wrong")
   }
   console.log("Your score is: "+ score)
   console.log("---------\n")

}
var questions=[
  firstQuestion={question:"Which of the following exists in C++? \na.Virtual destructor \nb.Virtual constructor \nc.Both A and B\nd.None of the Above\n.Your answer :",
  answer:"a"


  },
  secondQuestion={
    question:"Index of an array starts from\na.One\nb.Zero\nc.Two \nd.None of the Above\n.Your answer:",
  answer:"b"


  },
  thirdQuestion={question:"The variable that contains address of another variable is called as\na.Pointer \nb.Arrays \nc.Unions \nd.None of the Above\n.Your answer:",
  answer:"a"


  },
  fourthQuestion={question:"What is the minimum number of times a do loop would definitely get executed?\na.0\nb.1\nc.infinity\nd.Could not be predicted\n.Your answer:",
  answer:"b"


  },
  fifthQuestion={question:"Which of the following notation compares two variables X and Y?\na.X==Y\nb.X=Y \nc.X!=Y \nd.X equals Y\n.Your answer:",  answer:"a"
    }
]
for(i=0;i<questions.length;i++){
   var currentQuestion=questions[i]
   quiz(currentQuestion.question,currentQuestion.answer)
}

console.log("Your final Score is : " + score)
