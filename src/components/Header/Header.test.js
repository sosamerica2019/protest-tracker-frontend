import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Component: Header', () => {
  const props = {};

  it('renders without crashing', () => {
    expect(shallow(<Header {...props} />)).toHaveLength(1);
  });
});
