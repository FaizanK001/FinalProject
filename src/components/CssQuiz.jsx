import React,{useState} from 'react'
import '../assets/CSS/CssQuiz.css'

export default function CssQuiz()  {
	
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
        <div className="container">
        <h3>CSS QUIZ</h3>
		<div className='qapp'>
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
        questionText: 'What does CSS stand for?',
        answerOptions: [
            { answerText: 'Computer Style Sheets  ', isCorrect: false },
            { answerText: 'Creative Style Sheets', isCorrect: false },
            { answerText: 'Colorful Style Sheets', isCorrect: false },
            { answerText: 'Cascading Style Sheets ', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the correct HTML for referring to an external style sheet?',
        answerOptions: [
            { answerText: '<style src="mystyle.css">', isCorrect: false },
            { answerText: '<link rel="stylesheet" type="text/css" href="mystyle.css">', isCorrect: true },
            { answerText: '<stylesheet>mystyle.css</stylesheet>', isCorrect: false }
        ],
    },
    {
        questionText: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answerOptions: [
            { answerText: 'At the end of the document  ', isCorrect: false },
            { answerText: 'In the <body> section', isCorrect: false },
            { answerText: 'In the <head> section  ', isCorrect: true }
        ],
    },
    {
        questionText: 'Which HTML tag is used to define an internal style sheet?',
        answerOptions: [
            { answerText: '<style>', isCorrect: true },
            { answerText: '<script>', isCorrect: false },
            { answerText: '<css>', isCorrect: false }
        ],
    },
    {
        questionText: 'Which HTML attribute is used to define inline styles?',
        answerOptions: [
            { answerText: 'font', isCorrect: false },
            { answerText: 'class', isCorrect: false },
            { answerText: 'style', isCorrect: true },
            
        ],
    },
    {
        questionText: 'Which is the correct CSS syntax?',
        answerOptions: [
            { answerText: '{body;color:black;}', isCorrect: false },
            { answerText: 'body:color=black;', isCorrect: false },
            { answerText: 'body {color: black;}', isCorrect: true },
            { answerText: '{body:color=black;}', isCorrect: false }
            
        ],
    },
    {
        questionText: 'How do you insert a comment in a CSS file?',
        answerOptions: [
            { answerText: '// this is a comment //', isCorrect: false },
            { answerText: '/* this is a comment */ ', isCorrect: true },
            { answerText: '// this is a comment', isCorrect: true },
            { answerText: 'this is a comment', isCorrect: false }
            
        ],
    },
    {
        questionText: 'Which property is used to change the background color?',
        answerOptions: [
            { answerText: 'bgcolor', isCorrect: false },
            { answerText: 'background-color  ', isCorrect: true },
            { answerText: 'color', isCorrect: false }
            
        ],
    },
    {
        questionText: 'How do you add a background color for all <h1> elements?',
        answerOptions: [
            { answerText: 'all.h1 {background-color:#FFFFFF;}', isCorrect: false },
            { answerText: 'h1 {background-color:#FFFFFF;}', isCorrect: true },
            { answerText: 'h1.all {background-color:#FFFFFF;}', isCorrect: false }
            
        ],
    },
    {
        questionText: 'Which CSS property is used to change the text color of an element?',
        answerOptions: [
            { answerText: 'text-color', isCorrect: false },
            { answerText: 'fgcolor', isCorrect: false },
            { answerText: 'color', isCorrect: true }
            
        ],
    },

];
