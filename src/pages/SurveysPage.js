import React, { useEffect, useState } from 'react';

// API
import { getAllSurveys } from './../api/surveys';

// Components
import SurveyDisplayCardComponent from './../components/SurveyDisplayCardComponent';

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
      return <SurveyDisplayCardComponent key={survey.id} surveyTitle={survey.name} />
    });

    return survey;
  };

  useEffect(() => {
    onLoad();
  }, []);
  
  return (
    <div>
      <div>
        <h1>Compass Surveys</h1>
        {displaySurveys()}
      </div>
    </div>
  )
};

export default SurveysPage;