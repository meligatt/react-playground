import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../index';

describe('Alert', () => {
  describe('When text prop is passed', () => {
    it('renders an alert text', () => {
      const wrapper = shallow(<Alert text = 'MOCK_ALERT_TEXT' />);
      const text = wrapper.find('.alert__text').text();
      expect(text).toContain('MOCK_ALERT_TEXT');
    });
  });
});