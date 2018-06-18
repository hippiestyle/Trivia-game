
// this is my object containing all the questions for the game
var correct = 0; 
var incorrect = 0; 

var missionResult = [{
    win: "assets/images/missionaccomplished.png",
    lose: "assets/images/missionfailed.png"

}];

var questionsList = [{

    question: "We received a tip from a secret source that 'X' was in Burkina Faso, make your way to the capital city.", 
    answers: ["Ouagadougou", "Lagos", "Port Louis", "Abuja"], 
    correct: 1,
    funFact: "You just missed her, but you're on the right track. The phone you found has valuable info on it, give us some time and we'll see what intel we can gather from it. ",
    image: "assets/images/ouagadougou.jpg",
    correctCity: "Ouagadougou"
}, 
{
    question: "We got some intel from the phone, it says here that 'X' is heading to the biggest beach city (and possibly the capital) of Kenya, follow her!",
    answers: ["Kampala", "Mombasa", "Dakar", "Pretoria"],
    correct: 2,
    funFact: "Oh man! That was her! She's good, but along the way she left a notebook, scan it and send it to us, our team will look into it.",
    image: "assets/images/mombasa.jpg",
    correctCity: "Mombasa"
}, 
{   question: "Turns out she has a rendezvous in Asia. She's in the Caucasus bordering Russia, do you know where you're going?",
    answers: ["Tirana", "Sarajevo", "Tbilisi", "Lubljana"],
    correct: 3,
    funFact: "Well at least she thinks she lost you, keep on her tail, be patient. We'll get her.",
    image: "assets/images/tbilisi.jpg",
    correctCity: "Tbilisi"
},
{   question: "We intercepted an e-mail from her saying she was heading to Central American country for a new job on the volcanic island of Ometepe, what country could she possibly be going to?",
    answers: ["Costa Rica", "Nicaragua", "Mexico", "Belize"],
    correct: 2,
    funFact: "Lay low for the next couple days, it has been a wild ride, but as she preps for her job, she isn't going anywhere. Be patient!",
    image: "assets/images/managua.jpg",
    correctCity: "Nicaragua"
},
{   
    question: "Okay! Her job is in a city near the Negev Desert, what city do you want us to buy your flight to?",
    answers: ["Jerusalem", "Salt Lake City", "Algiers", "Ulaanbaatar"],
    correct: 1, 
    funFact: "Well you set the trap, our team will take care of the rest. Come back to HQ and we'll brief you when you arrive.",
    image: "assets/images/negev.jpg",
    correctCity: "Jerusalem"

}];

// FROM HERE ---- MY TIMER: I THINK I SHOULD TURN THIS INTO AN OBJECT. //

var intervalId; 
var number = 31; 


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    number = 31; 
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
    $("#photo-slot").html("You Got " + correct + " Right and " + incorrect + " Wrong");
    $("#question").html("<h1>ANALYSIS: </h1>");
    $(".guess-button").remove(); 
    stop();

    if (correct > incorrect) {
        $("#photo-slot2").html("<img src=" + missionResult[0].win + ">")
    } else { $("#photo-slot2").html("<img src=" + missionResult[0].lose + ">")
    }


}

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
    waitForList = setTimeout(addQuestions, 7000);
}

// variable to count position of questions
var aQQ = 0; 

function addQuestions() {
    if (aQQ < questionsList.length) {
        run();
        $("#photo-slot").html("");
        //could probably turn this into a loop. 
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




