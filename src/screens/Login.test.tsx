import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { LoginScreen } from '@screens';

describe('LoginScreen', () => {
  it('renders the login screen text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>,
    );

    expect(getByText('Login Screen')).toBeTruthy();
  });

  it('dispatches login action on button press', () => {
    const { getByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>,
    );

    const button = getByText('Login');
    fireEvent.press(button);
  });
});
