import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '@redux/slices/itemsSlice';
import { RootState } from '@redux/store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavProp>();
  const { data, loading } = useSelector((state: RootState) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <View>
      <Text>Home Screen</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { itemId: item.id })}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
