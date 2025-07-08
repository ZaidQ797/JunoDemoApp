import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreen } from '@screens';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/AppNavigator';

const createRoute = (
  itemId: number,
): RouteProp<RootStackParamList, 'Detail'> => ({
  key: '',
  name: 'Detail',
  params: { itemId },
});

describe('DetailScreen', () => {
  it('renders item ID', () => {
    const route = createRoute(42);
    const { getByText } = render(
      <NavigationContainer>
        <DetailScreen route={route} />
      </NavigationContainer>,
    );

    expect(getByText('Item ID: 42')).toBeTruthy();
  });
});
