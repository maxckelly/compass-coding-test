import React, { useEffect, useState } from 'react';

// API
import { getAllSurveys } from './../api/surveys';

// Components
import SurveyDisplayCardComponent from './../components/SurveyDisplayCardComponent';

// Styles
import styles from './../css/pages/surveyPage.module.css';

const SurveysPage = () => {

  const [surveys, setSurveys] = useState(null);

  // Fetch data from backend
  const onLoad = async () => {
    const response = await getAllSurveys();

    if (response.status === 200) {
      return setSurveys(response.data);
    } else {
      alert('An error has occurred, please try again');
    }
  };

  // render the survey component
  const displaySurveys = () => {
    const survey = surveys.map((survey) => {
      return <SurveyDisplayCardComponent key={survey.id} surveyTitle={survey.name} handleOnClick={() => console.log("CLICK")}/>
    });

    return survey;
  };

  useEffect(() => {
    onLoad();
  }, []);
  
  return (
    <div>
      <div className={styles.surveysContainer}>
        <h1>Compass Surveys</h1>
        <div className={styles.surveyContainer}>
          {surveys && displaySurveys()}
        </div>
      </div>
    </div>
  )
};

export default SurveysPage;