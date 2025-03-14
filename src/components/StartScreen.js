import React from 'react';

function StartScreen({ quizzes, dispatch }) {
  return (
    <div className="start-screen">
      <div className="quiz-title">
        <h1 className="quiz-header">
          Welcome to the <span className="quiz-bold">Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>
      <div className="start-options">
        {quizzes.map((quiz, i) => (
          <button
            className="btn btn-start-screen"
            key={quiz.title}
            onClick={() => dispatch({ type: 'start', payload: i })}
          >
            <img
                src={`${process.env.PUBLIC_URL}${quiz.icon}`}
                alt={`${quiz.title} icon`}
            />
            <span>{quiz.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default StartScreen;