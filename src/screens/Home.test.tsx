import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { HomeScreen } from '@screens';

describe('HomeScreen', () => {
  it('renders Home Screen text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    expect(getByText('Home Screen')).toBeTruthy();
  });
});
