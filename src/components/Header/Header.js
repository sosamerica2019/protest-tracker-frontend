import React, { PropTypes, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

import { AddEventButton, AddEvent } from '../';
import styles from './Header.sass';

const postNewEvent = (payload) => {
  return axios.post(`https://formspree.io/${process.env.FORMSPREE_EMAIL}`, payload);
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addEventModalExists: false,
      addEventModalOpen: false
    };

    this._handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggleModalState = this.toggleModalState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ addEventModalExists: false });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  }

  // Close menu if clicking on the document (outside of the menu)
  handleDocumentClick() {
    this.setState({ addEventModalOpen: false });
  }

  toggleModalState() {
    this.setState({
      addEventModalExists: true,
      addEventModalOpen: !this.state.addEventModalOpen
    });
  }

  renderAddEventModal() {
    // Change visibility instead of destroying component to main component's state in case modal is closed by accident
    return (
      <div id="modal-container" style={{ display: this.state.addEventModalOpen ? 'block' : 'none' }}>
        <AddEvent closeModal={this.toggleModalState} onSubmit={postNewEvent} />
      </div>
    );
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <div className={styles.headerLeftSection}>
            <Link to="/">
              <img
                className={styles.protestTrackerBanner}
                src="static/img/banner.png"
                srcSet="static/img/banner@2x.png 2x"
                height="75"
                width="307"
                alt="Protest Tracker logo"
              />
            </Link>
            <a href="https://www.sosamerica2019.com">
              <img
                className={styles.sosAmericaLogo}
                src="static/img/sos_logo.png"
                srcSet="static/img/sos_logo@2x.png 2x"
                height="75"
                width="105"
                alt="SOS America logo"
              />
            </a>
          </div>
          <div className={styles.headerRightSection} onClick={e => e.stopPropagation()}>
            <AddEventButton className="add-event-btn" />
            {this.state.addEventModalExists && this.renderAddEventModal()}
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
