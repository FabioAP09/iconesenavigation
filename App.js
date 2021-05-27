import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './assets/src/pages/home';
import Sobre from './assets/src/pages/sobre';
import Informacao from './assets/src/pages/informacao';
import Servico from './assets/src/pages/servico'

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  },
  Informacao: {
    name: 'ios-call'
  },
  Servico: {
    name: 'ios-desktop'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#000'
          }, activeTintColor: '#FF4500',

        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Informacao" component={Informacao} />
        <Tab.Screen name="Servico" component={Servico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

