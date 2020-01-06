import React, {Component} from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen'; 
//import Slider from './Slider';



import ProfileDriver from './ProfileDriver';

class BotaoPs extends Component{
    constructor(props){
      super(props);
      this.state = {};
      this.styles = StyleSheet.create({
        botao:{
          flex:1,
          height: 60,
          borderWidth:2,
          borderRadius: 10,
          borderColor: this.props.colorBorder,
          backgroundColor: this.props.colorBackground
        },
        botaoArea:{
          flex:1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        },
        Textos:{
          color: this.props.colorText,
          fontSize: 10,
          fontWeight:'bold'
  
        }
      });
    }
  
  
      render(){
         return(
            <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
              <View style= {this.styles.botaoArea}>
         <Text style={this.styles.Textos}> {this.props.text} </Text>
              </View>
              </TouchableOpacity>
  
      );
    }
  
   
  }
  
  class Menu extends Component{
    constructor(props){
      super(props);
      this.state = {};
      this.styles = StyleSheet.create({
        botao:{
          width:400,
          height:550,
          marginBottom: 40,
          marginTop: 5,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#b9c8c8',
          backgroundColor:'#fff'
        },
        botaoArea:{
          width:380,
          height:520,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent:'center',
          backgroundColor:'#ffffff'
          
        },
        
        botaoArea2:{
          padding: 5,
          width: 350,
          height: 350,
          backgroundColor: '#b9c8c8',
          borderRadius: 25,
          justifyContent: 'center'
          
          
        },
        imagemPerfil:{
         alignSelf: 'center',
         width: 350,
         height: 350,
         borderRadius: 25,
          
        },
        titulo:{
          color: '#000000',
          fontSize: 35,
          fontWeight:'bold',
          marginTop: 5, 
  
        },
        descricao:{
          color: '#000000',
          fontSize: 15,
          fontWeight:'bold',
          marginTop: 5,
          marginLeft: 20,
        },
        preco: {
          color: '#000000',
          fontSize: 18,
          fontWeight:'bold',
          marginLeft: -25,
          marginTop: 40
        },
        padd:{
          marginTop: 4
        }
      });
    }
  

    
    
  
      render(){
         return(
            <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
              <View  style= {this.styles.botaoArea} >
               
                 <View style= {this.styles.botaoArea2}>
                  
          
                    <Image style= {this.styles.imagemPerfil} source={require('./src/images/paulo.jpg')}/>
          
                   

                 </View>
                 <View style = {this.styles.padd}>
                   <View style= {{flexDirection: 'row'}}>
                   <Text style={this.styles.titulo}> {this.props.nomePerfil}</Text>
                   <Text style={this.styles.preco}> {this.props.descricaoPreco} </Text>
                   </View>
                 
                <Text style={this.styles.descricao}> {this.props.descricaoPerfil} </Text>
                <Text style={this.styles.descricao}> {this.props.descricaoCidade} </Text>
                <Text style={this.styles.descricao}> {this.props.descricaoBairro} </Text>
               
                 </View>
  
                
  
              </View>
              
              </TouchableOpacity>
  
      );
    }
  
   
  }
 

//Tela Home
class Feed extends Component {
static navigationOptions = {
  
  title: 'Home',
  
  
  };
  
    render() {
      return (
  <>
               {/*
                  <View style={styles.BotaoInterface}> 
                    <BotaoPs 
                        colorText={'#FFFFFF'} colorBorder={'#ffffff'} colorBackground={'#541c83'} text='Feed' 
                        onPress={() => this.props.navigation.navigate('Login')}
                        />
                     <BotaoPs 
                        colorText={'#FFFFFF'} colorBorder={'#ffffff'} colorBackground={'#541c83'} text='Watch'
                        onPress={() => this.props.navigation.navigate('Details')}
                        />    
  
                      <BotaoPs 
                        colorText={'#FFFFFF'} colorBorder={'#ffffff'} colorBackground={'#541c83'} text='Messages'
                        onPress={() => this.props.navigation.navigate('Details')}
                        />             
                                          
                    <BotaoPs 
                        colorText={'#FFFFFF'} colorBorder={'#ffffff'} colorBackground={'#541c83'} text='Profile'
                        onPress={() => this.props.navigation.navigate('Details')}
                        />                
                  </View>
                  
               */}
  
              <ScrollView style = {styles.scrollView}>
                   
              <View style={styles.body}>
                      
                   <View style={styles.botaoView}>
                      <Menu   nomePerfil={'Paulo Menezes'} descricaoPerfil= {'Instrutor há: 7 anos '} descricaoCidade = 'Mora em: São Paulo' 
                      descricaoBairro = {'Bairro: Vila Mariana'} descricaoPreco = {'R$ 50,00/h'} 
                     onPress={()=> this.props.navigation.navigate ('PerfilInstrutor')}/>
                       <Menu   nomePerfil={'Paulo Menezes'} descricaoPerfil= {'Instrutor há: 7 anos '} descricaoCidade = 'Mora em: São Paulo' 
                      descricaoBairro = {'Bairro: Vila Mariana'} descricaoPreco = {'R$ 50,00/h'} 
                     onPress={()=> this.props.navigation.navigate ('PerfilInstrutor')}/>
                       <Menu   nomePerfil={'Paulo Menezes'} descricaoPerfil= {'Instrutor há: 7 anos '} descricaoCidade = 'Mora em: São Paulo' 
                      descricaoBairro = {'Bairro: Vila Mariana'} descricaoPreco = {'R$ 50,00/h'} 
                     onPress={()=> this.props.navigation.navigate ('PerfilInstrutor')}/>
                       <Menu   nomePerfil={'Paulo Menezes'} descricaoPerfil= {'Instrutor há: 7 anos '} descricaoCidade = 'Mora em: São Paulo' 
                      descricaoBairro = {'Bairro: Vila Mariana'} descricaoPreco = {'R$ 50,00/h'} 
                     onPress={()=> this.props.navigation.navigate ('PerfilInstrutor')}/>
                   </View>
                   
    
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
      backgroundColor: '#e8fafa',
      
      
    },
    botaoView: {
      flexDirection: 'column',
      marginTop: 15,
      alignItems:'center',
      alignContent:'center',
    },
    BotaoInterface:{
      height: 70,
      flexDirection: 'row', 
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#ffffff',
    
    }
  });

  

  const MainNavigator = createStackNavigator({
 // Slider: {screen: Slider},
  Home: {screen: Feed},
  PerfilInstrutor: {screen: ProfileDriver}
 
}, {
  defaultNavigationOptions: {
headerStyle: {
  backgroundColor: '#3b5998',
  height: 40 ,
  borderRadius: 5
},
headerTintColor: '#fff',

headerTitleStyle: {
  fontWeight: 'bold',
  fontSize: 22,
  marginLeft: 25
}}});

const App = createAppContainer(MainNavigator);

export default App;