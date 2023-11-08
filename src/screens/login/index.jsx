import React from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logomarca.jpeg')}
        style={{ width: '80%', height: 100 }}
      />

      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => navigation.navigate('Players')}
      >
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
