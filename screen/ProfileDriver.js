import React, {Component} from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


//Tela Perfil
class ProfileDriver extends Component {

    static navigationOptions = {
        title: 'Perfil',
        header: null 
        
        };
    render() {
      return (
  <>        
            <ScrollView style = {styles.scrollView}>
                <View style = {{height: 10 ,width: 1000, backgroundColor: '#ffffff' }}></View>

                <View style = {{flexDirection: 'row',justifyContent: 'center',alignItems: 'center', 
                alignContent:'center', height: 160, backgroundColor: '#e8fafa', }}>
               
                     <Image style= {styles.ImageProfile} source={require('./src/images/paulo.jpg')}/>
                    
               
                <View style = {{flexDirection: 'column' }}> 
                    <Text style= {{fontSize: 28,marginTop: 10, marginLeft: 30, fontWeight: 'bold'}}>Paulo Menezes</Text>

                <View style = {{flexDirection: 'column' }}> 
                    <Text style= {{fontSize: 18,marginTop: 10, marginLeft: 30, fontWeight: 'normal'}}>Instrutor há 7 anos</Text>
                    <Text style= {{fontSize: 18,marginTop: 10, marginLeft: 30, fontWeight: 'normal'}}>São Paulo</Text>
                </View>
                </View>
       

       
                
              </View>

              
              <View style = {{marginTop: 20, flexDirection: 'column',justifyContent: 'center',alignItems: 'center', 
                alignContent:'center', height: 200, backgroundColor: '#e8fafa', }}>
              
                     <Text style= {{fontSize: 28,marginTop: 2, marginLeft: 30, fontWeight: 'bold'}}>Excelente professor!</Text>
                   
                     <View style={{alignItems:'center', marginTop: 30, marginBottom: 30}}>
                        <Stars
                          half={true}
                          default={2.5}
                          update={(val)=>{this.setState({stars: val})}}
                          spacing={4}
                          starSize={40}
                          count={5}
                          fullStar={require('./src/images/starFilled.png')}
                          emptyStar={require('./src/images/starEmpty.png')}
                          halfStar={require('./src/images/starHalf.png')}/>
                     </View>

                     <Button
                        title = "Avaliar"
                        color = "#33B2FF"
                      />

              </View>


              <View style = {{marginTop: 20, flexDirection: 'column',justifyContent: 'center',alignItems: 'center', 
                alignContent:'center', height: 200, backgroundColor: '#e8fafa', }}>
               
                  
                     <Text style= {{fontSize: 28,marginTop: 2, marginLeft: 30, fontWeight: 'bold'}}>+500 aulas.</Text>
                   

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
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {paddingTop: 20,
      backgroundColor: '#e9ebee',
      borderRadius: 30
      
    },
    ImageProfile: {
        height: 150,width: 150, borderRadius:80,
    },
   
  });


  const MainNavigator = createStackNavigator({
    Home: {screen: ProfileDriver},
   
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