import React, { Component } from 'react';
import {Card} from 'react-native-elements';
import {TextInput} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import { 
    Text,
    View,
    StyleSheet,
    Alert,
    Button,
    FlatList,
    Dimensions,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const data1 = require('/Users/apple/Mixo/Assets/data.json')

class home extends Component {
  
  constructor (props){
    super(props);

 //       this.navigate = this.navigate.bind(this)
      this.state = {
        data : data1
        
      };
    
  }
  static navigationOptions = {
    drawerLabel: 'Home',
 
  };
    navigate_Mojito = () => {
      const {navigate} = this.props.navigation;
            navigate('description',{data:this.state.data.Mojito},{i:1})
    }
    navigate_Blue_shoes = () => {
      const {navigate} = this.props.navigation;
            navigate('description',{data:this.state.data.BlueShoe},{i:0})
    }

    
   
 
  
    render() {
     
      return (
     <View style = {{color : 'black',flex :1,backgroundColor : '#212121'}}>
       <Button onPress={() => this.props.navigation.openDrawer()} title ='home'> </Button>
       <TextInput style  = {styles.input} placeholder = 'search for mocktails....' placeholderTextColor='grey'>
           
              
       </TextInput>
       <Text style = {{color : 'white',paddingLeft : 20,paddingTop : 20 , fontSize : 25,opacity :0.6}}>
         Trending...
       </Text>
     
           <ScrollView style = {styles.Background} 
           horizontal = {true}>
           
              
              <View style ={styles.box1}>
                <TouchableHighlight onPress = {this.navigate_Mojito} >
                  
                <ImageBackground source = {require( '/Users/apple/Mixo/Assets/mojito1.jpg')}
                resizeMode = 'contain'
                   style={{width: 250, height:600}}
                   >
                  <Text   
                  style={styles.card}>
                   Mojito
                  </Text>
                </ImageBackground>
               
                </TouchableHighlight>
               </View>

 
               <View style ={styles.box1}>
                <TouchableHighlight onPress = {this.navigate_Blue_shoes} >
                  
                <ImageBackground source = {require( '/Users/apple/Mixo/Assets/blue.jpg')}
            resizeMode = 'contain'
            style={{width: 250, height:600}}
                   >
                  <Text   
                  style={styles.card}>
                   BlueMagic
                  </Text>
                </ImageBackground>
               
                </TouchableHighlight>
               </View>


               
     
              
 
   
           </ScrollView>
      
          </View>
      );
    }
    
  }
  const styles = StyleSheet.create({
    scrollcontainer : {
        flex : 1
    },
    container:{
      flex : 1,
     flexDirection : 'row',
     flexWrap : 'wrap',
    
    },
    box1:{
      borderBottomLeftRadius : 20,
      borderTopRightRadius : 20,
      width : 320,
      height : 500,
      margin : 15, 
   
      alignSelf : 'center',
   
  
      //width : Dimensions.get('window').width / 2 - 6 ,
      
      justifyContent:'center',
      alignItems:'center',
      backgroundColor : '#000000',

      borderColor : '#484848',
      borderWidth : 5
      

    },
  Background:{
    backgroundColor: '#212121',
      },

    input :{
       
        borderWidth : 2,
        borderColor: 'grey',
        borderRadius : 15,
        height : 40,
        width : 350,
        alignSelf : 'center',
        marginTop : 20,
        alignContent :'center',
        textAlignVertical : 'center',
        paddingHorizontal : 15,
        paddingVertical : 2,
        opacity : 0.7,
      
    
    },  
  card : {
                  
                    fontSize : 30,
                    paddingBottom :50,
                    bottom :10,
                   fontFamily: 'sans-serif-medium',
                   color: '#bdbdbd',
                    position: 'absolute', // child
                   alignSelf: 'center',
                    textShadowColor : '#424242',
                     textShadowRadius : 10,
  }
  })

export default home
  