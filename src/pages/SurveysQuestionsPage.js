import React, { useState } from 'react';

// Components
import QuestionCardComponent from './../components/QuestionCardComponent';
import ButtonComponent from './../components/ButtonComponent';

// Styles
import styles from './../css/pages/SurveyQuestionsPage.module.css';

const SurveysQuestionsPage = ({history, location}) => {
  // Get state from route state
  const { name } = location.state.survey;
  const [questions] = useState(location.state.survey.questions);

  // Map and render questions
  const displayQuestions = () => {
    const question = questions.map((q) => {
      return <QuestionCardComponent title={q.title} subTitle={q.subTitle} options={q.options} />
    });

    return question;
  };

  // This handles the on survey submit
  const onSubmit = () => {
    alert('Your survey results have been submitted');
    return history.push('/');
  };

  return (
    <div className={styles.questionsContainer}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.questionContainer}>
        {displayQuestions()}
      </div>

      <div className={styles.buttonContainer}>
        <ButtonComponent title="Back" handleOnClick={() => history.push("/")}/>
        <ButtonComponent title="Submit" handleOnClick={() => onSubmit()}/>
      </div>
    </div>
  )
};

export default SurveysQuestionsPage;