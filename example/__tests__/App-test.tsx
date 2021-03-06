/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../source/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-logs-from-native');

it('renders correctly', () => {
  renderer.create(<App />);
});
