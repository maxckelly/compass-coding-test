import React from 'react';

// Component
import CheckboxComponent from './CheckboxComponent';

// Styles
import styles from './../css/components/QuestionCardComponent.module.css';

const QuestionCardComponent = ({title, subTitle, options}) => {

  const displayOptions = () => {
    const option = options.map((option) => {
      return <CheckboxComponent label={option.text}/>
    });

    return option;
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.subTitle}>{subTitle}</h3>

      <div className={styles.optionsContainer}>
        {options && displayOptions()}
      </div>
    </div>
  )
};

export default QuestionCardComponent;