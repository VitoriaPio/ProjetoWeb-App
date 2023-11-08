import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

const CardFavoriteAtleta = ({ atleta, onRemoveFavorite }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: atleta.strThumb,
        }}
        width={200}
        height="60%"
      />
      <View style={styles.infoView}>
        {/* Nome */}
        <Text style={styles.title}>{atleta.strPlayer}</Text>

        {/* informações */}
        <View style={styles.infos}>
          {/* Pais */}
          <View style={styles.infoText}>
            <FontAwesome
              color={'black'}
              name="globe"
              size={20}
            />
            <Text style={styles.subtitle}>
              {atleta.strNationality ? atleta.strNationality : 'Sem dados '}
            </Text>
          </View>

          {/* Posição */}
          <View style={styles.infoText}>
            <FontAwesome
              color={'black'}
              name="soccer-ball-o"
              size={20}
            />
            <Text style={styles.subtitle}>
              {atleta.strPosition ? atleta.strPosition : 'Sem dados '}
            </Text>
          </View>

          {/* Número */}
          <View style={styles.infoText}>
            <FontAwesome5
              color={'black'}
              name="tshirt"
              size={20}
            />
            <Text style={styles.subtitle}>
              {atleta.strNumber ? atleta.strNumber : 'Sem dados '}
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity
          style={styles.removeBtn}
           onPress={() => onRemoveFavorite(atleta.idPlayer)}
        >
          <AntDesign
            name="delete"
            size={18}
            color="white"
          />
          <Text style={{ color: 'white' }}>Remover Favorito</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default CardFavoriteAtleta;
