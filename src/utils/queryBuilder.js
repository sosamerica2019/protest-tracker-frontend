import _ from 'lodash';

import { dateTimeUtils } from '../utils';

function tokenizeSearchTerms(queryString) {
  // split prototype method is not robust enough: https://blog.tompawlak.org/split-string-into-tokens-javascript
  const tokenizedTerms = queryString.match(/\S+/g);

  if (!tokenizedTerms.length) {
    return '';
  }

  const queryStringArray = tokenizedTerms
    .map(term => {
      const fieldsToSearch = ['title', 'name', 'description', 'location/locality', 'hashtags'];
      const searchQuery = fieldsToSearch.map(field => `contains(${field}, '${term}')`);
      return `(${searchQuery.join(' or ')})`;
    });

  return queryStringArray.join(' and ');
}

// Builds up filter string by filter type
const eventFilters = new Map([
  ['startDate', val => `start_date gt ${dateTimeUtils.getMomentISOstring(val)}`],
  ['searchText', tokenizeSearchTerms]
]);

function eventsFilter(params = {}) {
  if (_.isEmpty(params)) {
    return '';
  }

  // Build array of different filter strings (e.g. for start date, location, etc)
  const filterStrings = _.map(params, (val, paramName) => eventFilters.get(paramName)(val));

  return `&$filter=${filterStrings.join(' and ')}`;
}

// If there's no zipcode set, then use geoLocation
function buildLocationUrl(location, range, geoLocation) {
  const zipCodeUrl = location && range ? `&distance_postal_code=${location}&distance_max=${range}` : '';
  const geoLocationUrl = (geoLocation && geoLocation.long && geoLocation.lat && geoLocation.maxDistance) ?  // eslint-disable-line max-len
    `&distance_coords=[${geoLocation.long},${geoLocation.lat}]&distance_max=${geoLocation.maxDistance}` : '';

  return zipCodeUrl || geoLocationUrl;
}

export default {
  eventsFilter,
  buildLocationUrl
};
