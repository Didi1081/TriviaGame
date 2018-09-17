// $(document).ready(function () {

//         var rightAnswer;
//         var wrongAnswer;
//         var noAnswer; 
//         var 

//     //need to creat variables
//     var triviaQuestionOne = {

//             questionAsked: "Which insect inspired the term computer bug?",
//             answerChoices: ["Moth", "Cockroach", "Fly", "Beetle"],
//             answer: 1

//         };

//     var triviaQuestionTwo = {

//             questionAsked: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
//             answerChoices: ["Beep! Beep!", "Vroom! Vroom!", "Ping! Ping!", "Ooga! Ooga"],
//             answer: 1,

//         };

//         var triviaQuestionThree = {

    

//             questionAsked: "Which man does NOT have a chemical element named after him? ",
//             answerChoices: ["Albert Einstein", "Niels Bohr", "Isaac Newton", "Enrico Fermi"],
//             answer: 3

//         };

//         //Create an array for the questions

//         var triviaQuestions = [triviaQuestionOne, triviaQuestionTwo, triviaQuestionThree]
       

//         for (var i = 0; i <array.Length; i++) {
//             alert(triviaQuestions [i]);
//             //Do something

//         }

        

//         //create a for loop to go through the questions

//multidementailnal array

     
var spot = 0, test, test_status, question, choice, choices, questionA, questionB, questionC, correct = 0;
var questions = [
    [ "What percent of the world’s currency is physical money? ", 
    "08%", 
    "75%", 
    "50%", 
    "A" ],
    [ "Why is Facebook Blue?", 
    "Mark Z is color blind!", 
    "The sky is blue!", 
    "It was the web developer's favorite color!", 
    "A" ],
    [ "Which insect inspired the term computer bug?", 
    "Moth", 
    "Cockroach", 
    "Fly",
     "A" ]
];
function al(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = al("test");
	if(spot >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		al("test_status").innerHTML = "Test Completed";
		spot = 0;
		correct = 0;
		return false;
	}
	al("test_status").innerHTML = "Question "+(spot+1)+" / "+questions.length;
	question = questions[spot][0];
	questionA = questions[spot][1];
	questionB = questions[spot][2];
	questionC = questions[spot][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+questionA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+questionB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+questionC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice === questions[spot][4]){
		correct++;
	}
	spot++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);




//The Timer

// function setup() {
//     var timer = select('#timer');
//     timer.html('this is where the timer will go');

// }




function countDown(secs,elem) {
	
	var element = document.getElementById(elem);
	element.innerHTML = ""+secs+" seconds left!";
	
	if(secs < 1) {
		clearTimeout(timer);
		element.innerHTML = '<h2>Time is Up!</h2>';
		
	}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'")',2000);
}





//pseudocoding:
// 1.) Need to show the correct answer once the player does not get the right answer
// 2.) Need to stop the timer once the player is done with all the questions.
// 3.) Need to make it responsive.
// 4.) Need to update design with CSS.
// 5.) Document.ready function is not working and breaking my code
//6.) Need a begin test button

















    























