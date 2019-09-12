import React, { PropTypes, Component } from 'react';
import { withRouter } from 'react-router-dom';

import { AddEventButton } from '../';
import { assetVersion } from '../../config';
import styles from './Header.sass';

class Header extends Component {
  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <div className={styles.headerLeftSection}>
            <a href="https://www.sosamerica2019.com">
              <img
                className={styles.sosAmericaLogo}
                src={`static/img/sos_logo.png?${assetVersion}`}
                srcSet={`static/img/sos_logo@2x.png?${assetVersion} 2x`}
                height="75"
                width="94"
                alt="SOS America logo"
              />
            </a>
            <a href="/">
              <img
                className={styles.protestTrackerBanner}
                src={`static/img/banner.png?${assetVersion}`}
                srcSet={`static/img/banner@2x.png?${assetVersion} 2x`}
                height="75"
                width="168"
                alt="Protest Tracker logo"
              />
            </a>
          </div>
          <div className={styles.headerRightSection} onClick={e => e.stopPropagation()}>
            <AddEventButton className="add-event-btn" />
          </div>
        </header>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

Header.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default withRouter(Header);
