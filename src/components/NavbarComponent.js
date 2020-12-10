import React from 'react';

// styles
import styles from './../css/components/NavbarComponent.module.css';

const Navbar = ({pageTitle}) => {

  return (
    <nav className={styles.container}>
      <h2 className={styles.header}>{pageTitle}</h2>
    </nav>
  )
};

export default Navbar;