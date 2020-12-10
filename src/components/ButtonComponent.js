import React from 'react';

// Styles
import styles from './../css/components/ButtonComponent.module.css';

const ButtonComponent = ({title, handleOnClick}) => {

  return (
    <button className={styles.button} onClick={handleOnClick}>
      {title}
    </button>
  )
};

export default ButtonComponent;