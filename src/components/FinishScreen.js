function FinishScreen({ points, quizzes, index, dispatch, numOfQuestions }) {
    if (!quizzes || !quizzes.length || index === null || quizzes[index] === undefined) {
      return <div>Loading quizzes...</div>;
    }
  
    const { title, icon } = quizzes[index];
  
    return (
      <div className="finish-screen">
        <div className="quiz-title">
          <h1 className="quiz-header">
            Quiz completed <span className="quiz-bold">You scored...</span>
          </h1>
        </div>
        <div className="score">
          <div className="score-title title">
            <img src={`${process.env.PUBLIC_URL}${icon}`} alt={`${title} icon`} />
            <h1>{title}</h1>
          </div>
          <h1 className="final-score">{points}</h1>
          <p>out of {numOfQuestions}</p>
        </div>
        <button
          className="btn btn-submit btn-restart"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Play again
        </button>
      </div>
    );
  }
  
  export default FinishScreen;