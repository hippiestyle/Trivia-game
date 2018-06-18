
// this is my object containing all the questions for the game
var correct = 0; 
var incorrect = 0; 
 

var questionsList = [{

    question: "We received a tip from a secret source that she was in Burkina Faso, make your way to the capital city.", 
    answers: ["Ouagadougou", "Lagos", "Port Louis", "Abuja"], 
    correct: 1,
    funFact: "You just missed her, but you're on the right track. The phone you found has valuable info on it, give us some time and we'll see what intel we can gather from it. ",
    image: "assets/images/ouagadougou.jpg",
    correctCity: "Ouagadougou"
}, 
{
    question: "We got some intel from the phone, it says here that she's heading to the biggest beach city (and possibly the capital) of Kenya, follow her!",
    answers: ["Kampala", "Mombasa", "Dakar", "Pretoria"],
    correct: 2,
    funFact: "How did you miss her? She was so close!",
    image: "assets/images/mombasa.jpg",
    correctCity: "Mombasa"
}, 
{   question: "It looks like she's heading to Asia near the Caucasus bordering Russia, do you know where you're going?",
    answers: ["Tirana", "Sarajevo", "Tbilisi", "Lubljana"],
    correct: 3,
    funFact: "Well at least she thinks she lost you, keep on her tail, be patient. We'll get her.",
    image: "assets/images/tbilisi.jpg",
    correctCity: "Tbilisi"
},
{   question: "We intercepted an e-mail from her saying she was heading to Central American country for a new job on the volcanic island of Ometepe, what country could she possible be referring to?",
    answers: ["Costa Rica", "Nicaragua", "Mexico", "Belize"],
    correct: 2,
    funFact: "Lay low for the next couple days, it has been a wild ride, but as she preps for her job, she isn't going anywhere. Be patient!",
    image: "assets/images/managua.jpg",
    correctCity: "Nicaragua"
},
{   
    question: "Okay! She's leaving for her job in the Negev Desert, where will she be flying to get there?",
    answers: ["Jerusalem", "Salt Lake City", "Algiers", "Ulaanbaatar"],
    correct: 1, 
    funFact: "Well you set the trap, our team will take care of the rest. Come back to HQ and we'll brief you when you arrive.",
    image: "assets/images/negev.jpg",
    correctCity: "Jerusalem"

}];

// FROM HERE ---- MY TIMER I SHOULD TURN THIS INTO AN OBJECT. //

var intervalId; 
var number = 11; 


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log("THIS IS RUNNING");
    number = 11; 
}

function decrement() {
    number--; 
    $("#timer").text(number + " Seconds Left!");
        if (number === 0) {
        addQuestions(); 
        incorrect++; 
        }

}

function stop() {
    clearInterval(intervalId);
}

// this is the end of the timer object//

var waitForList; 

function gameOver() {
    $("#photo-slot").html(" ");
    $("#timer").html("Well, Agent. We got the report back. Here's how you did."); 
    $("#question").html("You Got " + correct + " Correct");
    $("#button-1").remove(); 
    $("#button-2").html("You Got " + incorrect + " Wrong")
    $("#button-3").remove(); 
    $("button-4").remove(); 
    stop();
};

function ifCorrect() {
    $("#question").html(questionsList[aQQ-1].funFact);
    $(".guess-button").html(" ");
    $("#timer").html("CORRECT!"); 
    $("#photo-slot").html("<img src=" + questionsList[aQQ-1].image + ">")
    correct++;
    waitForList = setTimeout(addQuestions, 7000);
}

function ifWrong() {
    //fun fact 
    $("#question").html(questionsList[aQQ-1].funFact);
    //blank out other buttons temporarily
    $(".guess-button").html(" ");
    //image
    $("#photo-slot").html("<img src=" + questionsList[aQQ-1].image + ">")
    //show headliner as wrong! 
    $("#timer").html("WRONG! The correct answer is " + questionsList[aQQ-1].correctCity); 
    incorrect++; 
    waitForList = setTimeout(addQuestions, 5000);
}

// variable to count position of questions
var aQQ = 0; 

function addQuestions() {
    if (aQQ < questionsList.length) {
        run();
        $("#photo-slot").html("");
        $("#question").html(questionsList[aQQ].question);
        $("#button-1").html(questionsList[aQQ].answers[0]);
        $("#button-2").html(questionsList[aQQ].answers[1]);
        $("#button-3").html(questionsList[aQQ].answers[2]);
        $("#button-4").html(questionsList[aQQ].answers[3]);
        console.log("my aqq: " + aQQ);
        aQQ++; 

        } else { gameOver(); };
};

$("#start-game").on("click", function() { 
    addQuestions(); 
    run(); 
    //removes boxes from the game 
    $("#info-box").remove(); 
    $("#start-game").remove();

}); 

$(".guess-button").on("click", function() {
       var val = $(this).attr("value");
        console.log("value: " + val);


        if (val == questionsList[aQQ-1].correct) {
            //right
            stop(); 
            ifCorrect(); 

        } else {
            //wrong
            stop(); 
            ifWrong(); 
        }
        console.log("Correct: " + correct + "Incorrect: " + incorrect);

});



//END OF MY TIMER OBJECT - THAT HASNT BEEN CREATED YET//




