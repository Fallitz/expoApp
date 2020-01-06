
import *as React from 'react';
import { View, Text, } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabBar } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/FontAwesome';


import FeedScreen from './screen/Feed';
import ProfileScreen from './screen/Profile';
import HistoryScreen from './screen/Aulas';


//Add ou Remove screens
const RootStack = createBottomTabNavigator({
  
  Inicio:{screen: FeedScreen,
    tabBarLabel:"Inicio",

    navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={20} color="#900" />
    )}},
  Aulas: {screen: HistoryScreen,
      tabBarLabel:"Aulas",
    
      navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart" size={20} color="#900" />
      )}},

  Perfil: {screen: ProfileScreen,
  tabBarLabel:"Perfil",

  navigationOptions: {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="user" size={20} color="#900" />
  )}},

  
  },{
     tabBarOptions: {
       showIcon: true,
       activeTintColor: "#ff00ff",
       inactiveTintColor: "#ff00ff",
       activeBackgroundColor: '#ff00ff',
       inactiveBackgroundColor: '#ff00ff',
       

      },
      

      tabBarComponent: props => <TabBar
           activeColors={['#000000', '#000000', '#000000' ]} // or activeColors={'#e6b580'} letras cor
           activeTabBackgrounds={['#ede7e6','#ede7e6','#ede7e6' ]} // or activeTabBackgrounds={'#ede7e6'} Cor do backgorund da guia ativa
          //Cor de backgorund para o wrapper que contém as guias de navegação
        

            {...props}
       />,

    },
);



RootStack.navigationOptions = {
 
}


export default createAppContainer(RootStack);


