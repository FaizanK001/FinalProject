import React, { useState } from "react";
import "../assets/CSS/Htmlquiz.css";

export default function HtmlQuiz() {
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
    <div className="quiz-container">
      <h3>HTML QUIZ</h3>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const questions = [
  {
    questionText: "What does HTML stand for?",
    answerOptions: [
      { answerText: "Hyper Text Markup Language", isCorrect: true },
      { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
      { answerText: "Home Tool Markup Language", isCorrect: false },
      { answerText: "HighLight Text Markup Langauge", isCorrect: false },
    ],
  },
  {
    questionText: "Who is making the Web standards?",
    answerOptions: [
      { answerText: "Mozilla", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
      { answerText: "Google", isCorrect: false },
      { answerText: "The World Wide Web Consortium", isCorrect: true },
    ],
  },
  {
    questionText: "Choose the correct HTML element for the largest heading:",
    answerOptions: [
      { answerText: "<h1>", isCorrect: true },
      { answerText: "<head>", isCorrect: false },
      { answerText: "<h6>", isCorrect: false },
      { answerText: "<heading>", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is the correct HTML element for inserting a line break?",
    answerOptions: [
      { answerText: "<br>", isCorrect: true },
      { answerText: "<lb>", isCorrect: false },
      { answerText: "<break>", isCorrect: false },
      { answerText: "<p>", isCorrect: false },
    ],
  },
  {
    questionText: "What is the correct HTML for adding a background color?",
    answerOptions: [
      { answerText: "<background>yellow</background>", isCorrect: false },
      { answerText: '<body bg="yellow">', isCorrect: false },
      {
        answerText: '<body style="background-color:yellow;">',
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Choose the correct HTML element to define important text",
    answerOptions: [
      { answerText: "<i>", isCorrect: false },
      { answerText: "<important>", isCorrect: false },
      { answerText: "<strong>", isCorrect: true },
      { answerText: "<b>", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these elements are all <table> elements?",
    answerOptions: [
      { answerText: "<table><tr><tt>  ", isCorrect: false },
      { answerText: "<table><tr><td>  ", isCorrect: true },
      { answerText: "<table><head><tfoot>", isCorrect: true },
      { answerText: "<thead><body><tr>", isCorrect: false },
    ],
  },
  {
    questionText: "Choose the correct HTML element to define emphasized text",
    answerOptions: [
      { answerText: "<i>", isCorrect: false },
      { answerText: "<em>", isCorrect: true },
      { answerText: "<strong>", isCorrect: false },
      { answerText: "<italic>", isCorrect: false },
    ],
  },
  {
    questionText: "What is the correct HTML for creating a hyperlink?",
    answerOptions: [
      { answerText: '<a url="http://www.note.com">Note</a>', isCorrect: false },
      { answerText: '<a href="http://www.note.com">Note</a>', isCorrect: true },
      {
        answerText: '<a name="http://www.note.com">Note</a>',
        isCorrect: false,
      },
      { answerText: "<a>http://www.note.com</a>", isCorrect: false },
    ],
  },
  {
    questionText: "Which character is used to indicate an end tag?",
    answerOptions: [
      { answerText: "/", isCorrect: true },
      { answerText: "!", isCorrect: false },
      { answerText: "<", isCorrect: false },
      { answerText: "*", isCorrect: false },
    ],
  },
];
