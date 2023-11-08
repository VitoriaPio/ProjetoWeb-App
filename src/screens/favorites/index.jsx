import React, { useCallback, useState } from 'react';

import { View, Text, ScrollView, RefreshControl } from 'react-native';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native';

import CardFavoriteAtleta from '../../components/card-favorite-atleta';

import styles from './styles';

const FavoritesScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const { setItem, getItem, removeItem } = useAsyncStorage('favorite-players');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      handleFavoriteData();
    }, 2000);
  }, []);

  const handleFavoriteData = async () => {
    const response = await getItem();
    const parseData = response ? JSON.parse(response) : [];

    setData(parseData);
  };

  useFocusEffect(
    useCallback(() => {
      handleFavoriteData();
    }, [])
  );

  // const onFavoriteDelete = async (id) => {
  //   let newData = data.filter((player) => player.idPlayer != id);
  //   removeItem();
  //   await setItem(JSON.stringify(newData));
  //   onRefresh();
  // };

  return (
    <View style={styles.container}>
      {/* caso não haja jogadores favoritados */}
      {data === null && <Text>Sem dados!</Text>}

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {data.map((atleta, index) => {
          return (
            <CardFavoriteAtleta
              key={index}
              atleta={atleta}
              // onRemoveFavorite={onFavoriteDelete(atleta.idPlayer)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
