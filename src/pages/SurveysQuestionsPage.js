import React, { useState } from 'react';

// Components
import QuestionCardComponent from './../components/QuestionCardComponent';


const SurveysQuestionsPage = ({history, location}) => {
  // Get state from route state
  const { name } = location.state.survey;
  const [questions, setQuestions] = useState(location.state.survey.questions);

  // Map and render questions
  const displayQuestions = () => {
    const question = questions.map((q) => {
      return <QuestionCardComponent title={q.title} subTitle={q.subTitle} />
    });

    return question;
  };

  return (
    <div>
      <h2>{name}</h2>
      {displayQuestions()}
    </div>
  )
};

export default SurveysQuestionsPage;