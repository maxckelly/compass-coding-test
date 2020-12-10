import React from 'react';

// Styles
import styles from './../css/components/QuestionCardComponent.module.css';

const QuestionCardComponent = ({title, subTitle, options}) => {

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h3>{subTitle}</h3>
    </div>
  )
};

export default QuestionCardComponent;