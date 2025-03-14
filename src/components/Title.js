function Title({ quizzes, index }) {
    if (!quizzes || !quizzes.length || index === null || quizzes[index] === undefined) {
      return <div>Loading quizzes...</div>;
    }
  
    const { title, icon } = quizzes[index];
  
    return (
      <div className="title">
        <div className="title-left">
          <img src={`${process.env.PUBLIC_URL}${icon}`} alt={`${title} icon`} />
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
  
  export default Title;