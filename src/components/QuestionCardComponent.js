import React from 'react';


const QuestionCardComponent = ({title, subTitle, options}) => {

  return (
    <div>
      <h3>{title}</h3>
      <h3>{subTitle}</h3>
    </div>
  )
};

export default QuestionCardComponent;