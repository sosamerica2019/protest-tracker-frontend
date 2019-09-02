import React, { PropTypes } from 'react';

import styles from './Copyright.sass';

const Copyright = (props) => {
  return (
    <p className={styles.wrapper}>
      <span>&copy; </span>
      <span>{props.year}&nbsp;</span>
      <span>SOS America 2019</span>
    </p>
  );
};

Copyright.propTypes = {
  year: PropTypes.number.isRequired
};

export default Copyright;
