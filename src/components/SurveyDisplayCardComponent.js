import React from 'react';

// Styles
import styles from './../css/components/SurveyDisplayCardComponent.module.css';

const SurveyDisplayCardComponent = ({surveyTitle, handleOnClick}) => {

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <h2 className={styles.title}>{surveyTitle}</h2>
    </div>
  )
};

export default SurveyDisplayCardComponent;