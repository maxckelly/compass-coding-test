import React from 'react';

// Styles
import styles from './../css/components/CheckboxComponent.module.css';

const CheckboxComponent = ({label, isChecked, onCheckboxChange}) => {

  return (
    <div>
      <label className={styles.label}>
        <input 
          type="checkbox"
          name={label}
          checked={isChecked}
          onChange={onCheckboxChange}
          className={styles.checkbox}
        />
        {label}
      </label>
    </div>

  )
};

export default CheckboxComponent;