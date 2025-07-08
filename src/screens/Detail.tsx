import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/AppNavigator';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = () => {
  const route = useRoute<DetailRouteProp>();
  const { itemId } = route.params;

  return (
    <View>
      <Text>Detail Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};

export default DetailScreen;
