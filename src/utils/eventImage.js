const types = {
  March: 'march',
  Protest: 'protest',
  Rally: 'rally',
  'Relay Occupation': 'relay-occupation',
  'Training/Talks': 'training',
  Vigil: 'vigil',
  'Voter Registration': 'voter-registration'
};

function byType(type, size) {
  const image = types[type] || 'generic';
  return `../static/img/event-types/${image}-${size}.png`;
}

module.exports = {
  byType
};
