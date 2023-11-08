import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity } from 'react-native';

// Navegador
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Rotas
import PlayersScreen from './src/screens/players';
import FavoritesScreen from './src/screens/favorites';
import LoginScreen from './src/screens/login';

import Toast from 'react-native-toast-message';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  const { removeItem } = useAsyncStorage('favorite-players');

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        {/* Tela Login */}
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Seja Bem-Vindo(a)',
            headerStyle: { backgroundColor: 'white' },
            tabBarStyle: { display: 'none' },

            // icone
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="login"
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* Tela dos jogadores */}
        <Tab.Screen
          name="Players"
          component={PlayersScreen}
          options={{
            title: 'Jogadores',
            tabBarStyle: { backgroundColor: '#1e1e1e' },

            // icone
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="person"
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* Tela dos favoritos */}
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: 'Favoritados',
            tabBarStyle: { backgroundColor: '#1e1e1e' },

            // icone
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="star"
                color={color}
                size={size}
              />
            ),

            headerRight: () => (
              <TouchableOpacity onPress={() => removeItem()}>
                <AntDesign
                  name="delete"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
      <Toast />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
