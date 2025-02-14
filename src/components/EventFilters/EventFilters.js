import React, { PropTypes } from 'react';

import { EventSearchInput, EventDateFilter, EventLocationFilter, RsvpFilter } from '../';
import styles from './EventFilters.sass';


const EventFilters = (props) => {
  const { filters, updateFilters, disableGeoLocation, geoLocation, getPosition } = props;

  return (
    <section className={styles.filtersBorder}>
      <div className={styles.eventSearchInput}>
        <EventSearchInput
          filterInput={filters.searchText}
          updateFilters={updateFilters}
        />
      </div>
      <div className={styles.eventLocationFilter}>
        <EventLocationFilter
          location={filters.location}
          range={filters.range}
          updateFilters={updateFilters}
          disableGeoLocation={disableGeoLocation}
          geoLocation={geoLocation}
          getPosition={getPosition}
        />
      </div>
      <div className={styles.rsvpFilter}>
        <RsvpFilter
          updateFilters={updateFilters}
          sortOption={filters.orderby}
          className={styles.rsvpFilter}
        />
      </div>
      <div className={styles.eventDateFilter}>
        <EventDateFilter
          startDate={filters.startDate}
          updateFilters={updateFilters}
          className={styles.eventDateFilter}
        />
      </div>
    </section>
  );
};

EventFilters.propTypes = {
  filters: PropTypes.shape().isRequired,
  geoLocation: PropTypes.shape(),
  getPosition: PropTypes.func.isRequired,
  disableGeoLocation: PropTypes.func,
  updateFilters: PropTypes.func.isRequired
};

export default EventFilters;
