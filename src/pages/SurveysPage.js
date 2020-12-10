import React from 'react';

// Components
import SurveyDisplayCardComponent from './../components/SurveyDisplayCardComponent';

const SurveysPage = () => {
  return (
    <div>
      <div>
        <h1>Compass Surveys</h1>
        <SurveyDisplayCardComponent surveyTitle="Survey One" />
      </div>
    </div>
  )
};

export default SurveysPage;