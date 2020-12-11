import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
// API
import { getSurvey } from './../api/surveys';

// Components
import QuestionCardComponent from './../components/QuestionCardComponent';
import ButtonComponent from './../components/ButtonComponent';

// Styles
import styles from './../css/pages/SurveyQuestionsPage.module.css';

const SurveysQuestionsPage = ({history, location}) => {
  // Get state from route state
  const { id } = useParams();
  const [name, setName] = useState(location.state ? location.state.survey.name : null);
  const [questions, setQuestions] = useState(location.state ? location.state.survey.questions : null);

  // If data not in state then make api call
  const onLoad = async () => {
    const response = await getSurvey(id);

    if (response.status === 200) {
      setQuestions(response.data.questions);
      return setName(response.data.name);
    } else {
      alert('An error has occurred');
      return history.push('/');
    }
  };

  useEffect(() => {
    if (!location.state) { 
      onLoad();
    };
  }, [])

  // Map and render questions
  const displayQuestions = () => {
    const question = questions.map((q) => {
      return <QuestionCardComponent key={q.order} title={q.title} subTitle={q.subTitle} options={q.options} />
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
        {questions && displayQuestions()}
      </div>

      <div className={styles.buttonContainer}>
        <ButtonComponent title="Back" handleOnClick={() => history.push("/")}/>
        <ButtonComponent title="Submit" handleOnClick={() => onSubmit()}/>
      </div>
    </div>
  )
};

export default SurveysQuestionsPage;