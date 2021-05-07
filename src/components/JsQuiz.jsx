import React,{useState} from 'react'
import '../assets/CSS/JsQuiz.css'
export default function JsQuiz() {
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <div className="j-container">
        <h3>JAVASCRIPT QUIZ</h3>
		<div className='j-app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
               
			)}
		</div>
        </div>
	);
}


const questions = [
    {
        questionText: 'Inside which HTML element do we put the JavaScript?',
        answerOptions: [
            { answerText: '<scripting>', isCorrect: false },
            { answerText: '<script>', isCorrect: true },
            { answerText: '<js>', isCorrect: false },
            { answerText: '<javascript>', isCorrect: false },
        ],
    },
    {
        questionText: `What is the correct JavaScript syntax to change the content of the HTML element below?

        <p id="demo">This is a demonstration.</p>`,
        answerOptions: [
            { answerText: 'document.getElementByName("p").innerHTML = "Hello World!";', isCorrect: false },
            { answerText: '#demo.innerHTML = "Hello World!";', isCorrect: false },
            { answerText: 'document.getElementById("demo").innerHTML = "Hello World!";', isCorrect: true },
            { answerText: 'document.getElement("p").innerHTML = "Hello World!";', isCorrect: false },
        ],
    },
    {
        questionText: 'Where is the correct place to insert a JavaScript?',
        answerOptions: [
            { answerText: 'The <head> section', isCorrect: false },
            { answerText: 'The <body> section', isCorrect: false },
            { answerText: 'Both the <head> section and the <body> section are correct ', isCorrect: true }
        ],
    },
    {
        questionText: 'The external JavaScript file must contain the <script> tag.',
        answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true }
        ],
    },
    {
        questionText: 'How do you write "Hello World" in an alert box?',
        answerOptions: [
            { answerText: 'alertBox("Hello World");', isCorrect: false },
            { answerText: 'alert("Hello World");  ', isCorrect: true },
            { answerText: 'msg("Hello World");', isCorrect: false },
            
        ],
    },
    {
        questionText: 'How do you create a function in JavaScript?',
        answerOptions: [
            { answerText: 'function = myFunction()', isCorrect: false },
            { answerText: 'function:myFunction()', isCorrect: false },
            { answerText: 'function myFunction()  ', isCorrect: true }
            
        ],
    },
    {
        questionText: 'How do you call a function named "myFunction"?',
        answerOptions: [
            { answerText: 'myFunction()', isCorrect: true },
            { answerText: 'call function myFunction()', isCorrect: false },
            { answerText: 'call myFunction()', isCorrect: false }
            
        ],
    },
    {
        questionText: 'How to write an IF statement in JavaScript?',
        answerOptions: [
            { answerText: 'if i = 5 then', isCorrect: false },
            { answerText: 'if i = 5', isCorrect: false },
            { answerText: 'if i == 5 then', isCorrect: false },
            { answerText: 'if (i == 5)  ', isCorrect: true }
            
        ],
    },
    {
        questionText: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answerOptions: [
            { answerText: 'if (i != 5) ', isCorrect: true },
            { answerText: 'if i =! 5 then', isCorrect: false },
            { answerText: 'if (i <> 5)', isCorrect: false },
            { answerText: 'if i <> 5', isCorrect: false }
            
        ],
    },
    {
        questionText: 'How does a WHILE loop start?',
        answerOptions: [
            { answerText: 'while (i <= 10)  ', isCorrect: true },
            { answerText: 'while (i <= 10; i++)', isCorrect: false },
            { answerText: 'while i = 1 to 10', isCorrect: false }
            
        ],
    },

];
