import React from 'react';
import { shallow } from 'enzyme';

import AddEventButton from './AddEventButton';


describe('Component: <AddEventsButton />', () => {
  const props = {};

  it('renders without crashing', () => {
    shallow(<AddEventButton {...props} />, document.createElement('div'));
  });
});
