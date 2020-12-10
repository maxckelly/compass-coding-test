import React, { useState } from 'react';

// Components
import QuestionCardComponent from './../components/QuestionCardComponent';
import ButtonComponent from './../components/ButtonComponent';

// Styles
import styles from './../css/pages/SurveyQuestionsPage.module.css';

const SurveysQuestionsPage = ({history, location}) => {
  // Get state from route state
  const { name } = location.state.survey;
  const [questions, setQuestions] = useState(location.state.survey.questions);

  // Map and render questions
  const displayQuestions = () => {
    const question = questions.map((q) => {
      return <QuestionCardComponent title={q.title} subTitle={q.subTitle} options={q.options} />
    });

    return question;
  };

  return (
    <div className={styles.questionsContainer}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.questionContainer}>
        {displayQuestions()}
      </div>

      <div className={styles.buttonContainer}>
        <ButtonComponent title="Back" handleOnClick={() => history.push("/")}/>
        <ButtonComponent title="Submit" handleOnClick={() => console.log("MAX")}/>
      </div>
    </div>
  )
};

export default SurveysQuestionsPage;