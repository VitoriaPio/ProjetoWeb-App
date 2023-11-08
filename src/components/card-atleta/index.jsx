import React, { useCallback, useState } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Toast from 'react-native-toast-message';

const CardAtleta = ({ atleta }) => {
  const { setItem, getItem } = useAsyncStorage('favorite-players');
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteData = async () => {
    const response = await getItem();
    const parseData = response ? JSON.parse(response) : [];

    const filterData = parseData.find(
      (player) => player.idPlayer === atleta.idPlayer
    );

    setIsFavorite(filterData ? true : false);
  };

  useFocusEffect(
    useCallback(() => {
      handleFavoriteData();
    }, [])
  );

  const storeFavoriteData = async (
    id,
    nome,
    nacionalidade,
    posicao,
    numero,
    thumb
  ) => {
    try {
      let newData = {
        idPlayer: id,
        strPlayer: nome,
        strNationality: nacionalidade,
        strPosition: posicao,
        strNumber: numero,
        strThumb: thumb,
      };

      // Recuperando dados do local storage antes de atualiza-los
      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      // Passando todos os antigos favoritados + novo jogador favoritado
      const data = [...previousData, newData];

      await setItem(JSON.stringify(data));

      // Feedback visual
      Toast.show({
        type: 'success',
        text1: 'Favoritado com sucesso!',
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro ao favoritar!',
      });

      console.log(e);
    }

    handleFavoriteData();
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          atleta.strThumb
            ? { uri: atleta.strThumb }
            : require('../../../assets/perfil.jpg')
        }
        style={{ width: 250, height: '60%', borderRadius: 12 }}
      />

      <View style={styles.infoView}>
        {/* Nome */}
        <Text style={styles.title}>{atleta.strPlayer}</Text>

        {/* informações */}
        <View style={styles.infos}>
          {/* Pais */}
          <View style={styles.infoText}>
            <FontAwesome
              name="globe"
              size={20}
              color="white"
            />
            <Text style={styles.subtitle}>
              {atleta.strNationality ? atleta.strNationality : 'Sem dados '}
            </Text>
          </View>

          {/* Posição */}
          <View style={styles.infoText}>
            <FontAwesome
              name="soccer-ball-o"
              size={20}
              color="white"
            />
            <Text style={styles.subtitle}>
              {atleta.strPosition ? atleta.strPosition : 'Sem dados '}
            </Text>
          </View>

          {/* Número */}
          <View style={styles.infoText}>
            <FontAwesome5
              name="tshirt"
              size={20}
              color="white"
            />
            <Text style={styles.subtitle}>
              {atleta.strNumber ? atleta.strNumber : 'Sem dados '}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={isFavorite ? styles.disabled : styles.iconButton}
        disabled={isFavorite}
        onPress={() =>
          storeFavoriteData(
            atleta.idPlayer,
            atleta.strPlayer,
            atleta.strNationality,
            atleta.strPosition,
            atleta.strNumber,
            atleta.strThumb
          )
        }
      >
        <FontAwesome
          name="heart"
          size={20}
          color={isFavorite ? '#2c2c2c' : 'white'}
        />
        <Text style={{ color: isFavorite ? '#2c2c2c' : 'white' }}>
          Favoritar Jogador{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAtleta;
