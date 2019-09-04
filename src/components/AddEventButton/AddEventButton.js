import React, { PropTypes } from 'react';

import styles from './AddEventButton.sass';

const AddEventButton = (props) => {
  return (
    <a className={styles.btnAddEvents}
      href="https://docs.google.com/forms/d/e/1FAIpQLScbAy0xEQy7iJame76OFqW_qt3R-8SaCi6t1LmI43t8sRiAWw/viewform"
      target="_blank">Add Event</a>
  );
};

export default AddEventButton;
