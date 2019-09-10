import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import FaSearch from 'react-icons/lib/fa/search';

import styles from './EventSearchInput.sass';

function isMobile() {
  const { navigator } = window;

  if (!navigator && navigator.userAgent) { return null; }

  return navigator.userAgent.match(/iPhone|Android|iPad|iPod/i);
}

class EventSearchInput extends Component {
  constructor(props) {
    super(props);
    this._updateFilters = _.debounce(this.updateFilters.bind(this));
  }

  componentDidMount() {
    if (!isMobile()) { this.input.focus(); }
  }

  updateFilters(searchText) {
    this.props.updateFilters({ searchText });
  }

  render() {
    const { filterInput } = this.props;

    return (
      <div className={styles.inputSearchWrapper}>
        <FaSearch size={18} />
        <input
          value={filterInput}
          ref={node => this.input = node}
          onChange={e => this._updateFilters(e.target.value)}
          placeholder="Search by city, hashtag, or keyword"
        />
      </div>
    );
  }
}

EventSearchInput.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filterInput: PropTypes.string.isRequired
};

export default EventSearchInput;
