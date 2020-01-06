import React, {Component} from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
   

//Tela Perfil
class Aulas extends Component{
    
    static navigationOptions = {
        title: 'Aulas',
        
        };
    render() {
      return (
  <>        
            <ScrollView style = {styles.scrollView} >
                <View style= {styles.body}>
                  <View style= {{ alignSelf: 'center', justifyContent: 'center',width: 390, height: 150, backgroundColor: '#e8fafa'}}>
                    <Text style = {{alignSelf: 'center', fontSize: 30}}>2 aulas concluídas</Text>
                  </View>
                  <Text style = {{fontSize: 20, margin: 30, alignSelf: 'center'}}>Nenhuma aula agendada</Text>
                </View>
    
            </ScrollView>
               
                       
          
       
        </>
      );
    }
  }
  
  const styles = StyleSheet.create({
    scrollView: {
      flex:1,
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      flex:1,
      paddingTop: 20,
      borderRadius: 30
      
    },
   
   
  });


  const MainNavigator = createStackNavigator({
    Home: {screen: Aulas},
   
  }, {
    defaultNavigationOptions: {
  headerStyle: {
    backgroundColor: '#3b5998',
    height: 40 ,
    borderRadius: 5
  },
  headerTintColor: '#ffff',
  
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 25
  }}});
  
  const App = createAppContainer(MainNavigator);
  
  export default App;