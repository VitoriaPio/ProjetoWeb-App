import React, { useState, useCallback } from 'react';

import {
  ScrollView,
  TextInput,
  RefreshControl,
  SafeAreaView,
} from 'react-native';

import { usePlayer } from '../../hooks/use-player';

import styles from './styles';

import CardAtleta from '../../components/card-atleta';

const PlayersScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const { data } = usePlayer(search);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const filterData =
    data != null ? data.filter((player) => player.strSport === 'Soccer') : [];

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Busque um jogador"
        placeholderTextColor={'black'}
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {filterData.map((player, index) => {
          return (
            <CardAtleta
              key={index}
              atleta={player}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayersScreen;
