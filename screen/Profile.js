import React, {Component} from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Tela Perfil
class Profile extends Component {

    static navigationOptions = {
        title: 'Perfil',
        
        };
    render() {
      return (
  <>        
            <ScrollView style = {styles.scrollView}>
                <View style = {{height: 10 ,width: 1000, backgroundColor: '#ffffff' }}></View>

                <View style = {{flexDirection: 'row',justifyContent: 'center',alignItems: 'center', 
                alignContent:'center', height: 160, backgroundColor: '#e8fafa', }}>
               
                     <Image style= {styles.ImageProfile} source={require('./src/images/semPerfil.jpg')}/>
                    
               
                <View style = {{flexDirection: 'column' }}> 
                    <Text style= {{fontSize: 28,marginTop: 10, marginLeft: 30, fontWeight: 'bold'}}>Ricardo Silva</Text>

                <View style = {{flexDirection: 'column' }}> 
                    <Text style= {{fontSize: 18,marginTop: 10, marginLeft: 30, fontWeight: 'normal'}}>Idade: 22 anos</Text>
                    <Text style= {{fontSize: 18,marginTop: 10, marginLeft: 30, fontWeight: 'normal'}}>De: São Paulo</Text>
                </View>
                </View>


                
              </View>

             


              <View style = {{marginTop: 20, flexDirection: 'column',justifyContent: 'center',alignItems: 'center', 
                alignContent:'center', height: 200, backgroundColor: '#e8fafa', }}>


                  <View style={{alignItems:'center'}}>
                    <Stars
                      display={3.67}
                      spacing={8}
                      count={5}
                      starSize={40}
                      backingColor='#e8fafa'
                      fullStar= {require('./src/images/starFilled.png')}
                      emptyStar= {require('./src/images/starEmpty.png')}/>
                  </View>
                    
                  
                     <Text style= {{fontSize: 28,marginTop: 2, marginLeft: 30, fontWeight: 'bold'}}>Excelente aluno!</Text>
                   


              </View>


              <View style = {{marginTop: 20, flexDirection: 'column',justifyContent: 'center',alignItems: 'center', 
                alignContent:'center', height: 200, backgroundColor: '#e8fafa', }}>
               
                  
                     <Text style= {{fontSize: 28,marginTop: 2, marginLeft: 30, fontWeight: 'bold'}}>2 aulas concluídas.</Text>
                   

              </View>


            </ScrollView>
               
                       
          
       
        </>  
      );
    }
  }
  
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {paddingTop: 20,
      backgroundColor: '#e9ebee',
      borderRadius: 30
      
    },
    ImageProfile: {
        height: 150,width: 150, borderRadius:80,
    },

    myStarStyle: {
      color: 'yellow',
      backgroundColor: 'transparent',
      textShadowColor: 'black',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2,
    },
    myEmptyStarStyle: {
      color: 'white',
    }
   
  });


  const MainNavigator = createStackNavigator({
    Home: {screen: Profile},
   
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