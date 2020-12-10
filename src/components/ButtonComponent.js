import React from 'react';

// Styles
import styles from './../css/components/ButtonComponent.module.css';

const ButtonComponent = ({title}) => {

  return (
    <button className={styles.button}>
      {title}
    </button>
  )
};

export default ButtonComponent;